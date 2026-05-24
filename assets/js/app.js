/* ============================================================
   VIVERO EL GRANJERO — Application Logic
   Vanilla JS: catálogo, filtros, carrito, modal, WhatsApp
   ============================================================ */

'use strict';

// ── Configuración global ─────────────────────────────────
const CONFIG = {
  WHATSAPP_NUMBER: '573052090482',
  STORE_NAME: 'Vivero El Granjero',
};

// ── Estado de la aplicación ──────────────────────────────
let state = {
  activeFilter: 'todos',
  searchQuery: '',
  cart: [],
  modalProduct: null,
};

// ── Helpers ──────────────────────────────────────────────
const formatPrice = (price) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

const getCategoryEmoji = (cat) => ({
  populares:     '🌿',
  florales:      '🌸',
  ornamentales:  '🪴',
  suculentas:    '🌵',
  cercos:        '🌾',
  macetas:       '🏺',
  sustratos:     '🌱',
})[cat] || '🌿';

const getCategoryLabel = (cat) => ({
  todos:         'Todos',
  populares:     'Populares',
  florales:      'Florales',
  ornamentales:  'Ornamentales',
  suculentas:    'Suculentas',
  cercos:        'Para Cercos',
  macetas:       'Macetas',
  sustratos:     'Sustratos',
})[cat] || cat;

// ── Renderizado de imagen / placeholder ─────────────────
function renderProductImage(product, forModal = false) {
  if (product.image) {
    if (forModal) {
      return `<img src="${product.image}" alt="${product.name}" loading="lazy"
        class="w-full h-full object-cover">`;
    }
    const placeholderSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    return `<img src="${placeholderSrc}" data-src="${product.image}" alt="${product.name}"
      class="w-full h-full object-cover lazy-load">`;
  }
  const size = forModal ? 'text-6xl' : 'text-4xl';
  return `
    <div class="product-placeholder placeholder-${product.category} w-full h-full">
      <span class="${size}">${getCategoryEmoji(product.category)}</span>
      <span class="text-xs text-center px-3 font-medium"
        style="color: var(--verde); opacity: 0.5; max-width: 140px; line-height: 1.3">
        ${product.name}
      </span>
    </div>`;
}

function initLazyImages() {
  const images = document.querySelectorAll('img.lazy-load');
  if (!images.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      const src = img.dataset.src;
      if (src) {
        img.src = src;
        img.removeAttribute('data-src');
        img.classList.remove('lazy-load');
      }
      obs.unobserve(img);
    });
  }, { rootMargin: '200px 0px 200px 0px', threshold: 0.01 });

  images.forEach(img => observer.observe(img));
}

// ── Renderizado de una tarjeta de producto ───────────────
function renderProductCard(product) {
  const priceHtml = product.price
    ? `<div class="product-price">${formatPrice(product.price)}
         ${product.priceNote
           ? `<span class="product-price-note">${product.priceNote}</span>`
           : ''}</div>`
    : `<div class="product-price consultar">Consultar precio</div>`;

  const badgeHtml = product.orderType === 'whatsapp'
    ? `<span class="product-badge badge-encargo">Por Encargo</span>`
    : product.stock === 'out_of_stock'
    ? `<span class="product-badge badge-agotado">Agotado</span>`
    : '';

  const ctaHtml = buildCardCTA(product);

  return `
    <article class="product-card fade-in-up" data-id="${product.id}"
      role="button" tabindex="0" aria-label="Ver detalles de ${product.name}"
      onclick="openProductModal('${product.id}')"
      onkeydown="if(event.key==='Enter') openProductModal('${product.id}')">
      <div class="product-image-wrap">
        ${renderProductImage(product)}
        ${badgeHtml}
      </div>
      <div class="product-body">
        <div class="product-category-tag">${getCategoryLabel(product.category)}</div>
        <h3 class="product-name">${product.name}</h3>
        ${product.scientificName
          ? `<div class="product-scientific">${product.scientificName}</div>`
          : ''}
        ${product.environment
          ? `<div class="product-env">☀ ${product.environment}</div>`
          : ''}
        ${product.dimensions
          ? `<div class="product-env">📐 ${product.dimensions}</div>`
          : ''}
        ${priceHtml}
        <div onclick="event.stopPropagation()">
          ${ctaHtml}
        </div>
      </div>
    </article>`;
}

// ── CTA según tipo de pedido ─────────────────────────────
function buildCardCTA(product) {
  if (product.stock === 'out_of_stock') {
    return `<button class="btn-cart opacity-50" disabled>Agotado</button>`;
  }
  if (product.orderType === 'whatsapp') {
    return `<button class="btn-encargo"
      onclick="openWhatsAppProduct('${product.id}')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Pedir por WhatsApp</button>`;
  }
  if (product.orderType === 'quote' || !product.price) {
    return `<button class="btn-quote"
      onclick="openWhatsAppProduct('${product.id}')">
      Consultar precio</button>`;
  }
  return `<button class="btn-cart"
    onclick="addToCart('${product.id}')">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
    Añadir al carrito</button>`;
}

// ── Renderizar grid de productos ─────────────────────────
function renderCatalog() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('products-count');
  if (!grid) return;

  const filtered = PRODUCTS.filter((p) => {
    const matchCat  = state.activeFilter === 'todos' || p.category === state.activeFilter;
    const q         = state.searchQuery.toLowerCase();
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      (p.scientificName || '').toLowerCase().includes(q) ||
      (p.tags || []).some(t => t.includes(q));
    return matchCat && matchSearch;
  });

  if (countEl) countEl.textContent = `${filtered.length} productos`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>🌿</p>
        <p>No encontramos plantas con ese filtro.</p>
        <p style="font-size:0.75rem; margin-top:0.5rem">
          Prueba con otra categoría o escríbenos al WhatsApp.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(renderProductCard).join('');
  initLazyImages();
  initFadeObserver();
}

// ── Filtros ──────────────────────────────────────────────
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCatalog();
      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initSearch() {
  const input = document.getElementById('product-search');
  if (!input) return;
  let timer;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      state.searchQuery = input.value;
      renderCatalog();
    }, 250);
  });
}

// ── Carrito ──────────────────────────────────────────────
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(i => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ id: productId, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`"${product.name}" añadido al carrito 🌿`);
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('veg_cart', JSON.stringify(state.cart));
}

function loadCart() {
  try {
    const saved = localStorage.getItem('veg_cart');
    if (saved) state.cart = JSON.parse(saved);
  } catch {}
}

function updateCartUI() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);
  }
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const subtotalEl = document.getElementById('cart-subtotal');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon">🌿</span>
        <p>Tu carrito está vacío</p>
        <p style="font-size:0.75rem; color:#ccc">Explora el catálogo y añade tus plantas favoritas</p>
      </div>`;
    if (subtotalEl) subtotalEl.textContent = '$0';
    return;
  }

  let subtotal = 0;
  container.innerHTML = state.cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';
    const lineTotal = (product.price || 0) * item.qty;
    subtotal += lineTotal;
    return `
      <div class="cart-item">
        <div class="cart-item-image">
          ${product.image
            ? `<img src="${product.image}" alt="${product.name}"
                class="w-full h-full object-cover rounded">`
            : `<span style="font-size:1.5rem">${getCategoryEmoji(product.category)}</span>`}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-price">
            ${product.price ? formatPrice(product.price) : 'A consultar'}
          </div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="updateQty('${item.id}', -1)"
              aria-label="Reducir cantidad">−</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty('${item.id}', 1)"
              aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
        <button class="cart-remove" onclick="removeFromCart('${item.id}')"
          aria-label="Eliminar ${product.name} del carrito">✕</button>
      </div>`;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
}

function openCart() {
  renderCartItems();
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Checkout WhatsApp ────────────────────────────────────
function checkoutWhatsApp() {
  if (state.cart.length === 0) return;

  const lines = state.cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return null;
    const priceStr = p.price ? ` — ${formatPrice(p.price * item.qty)}` : '';
    return `• ${p.name} × ${item.qty}${priceStr}`;
  }).filter(Boolean);

  const hasConsultar = state.cart.some(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return p && !p.price;
  });

  const subtotal = state.cart.reduce((s, i) => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return s + ((p?.price || 0) * i.qty);
  }, 0);

  let message = `Hola ${CONFIG.STORE_NAME} 👋\n\nDeseo cotizar el siguiente pedido:\n\n`;
  message += lines.join('\n');
  if (subtotal > 0) {
    message += `\n\n*Subtotal estimado: ${formatPrice(subtotal)}*`;
  }
  if (hasConsultar) {
    message += `\n_(Algunos productos requieren consulta de precio)_`;
  }
  message += `\n\n¡Gracias!`;

  const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

function openWhatsAppProduct(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  let message = `Hola ${CONFIG.STORE_NAME} 👋\n\n`;
  if (p.orderType === 'whatsapp') {
    message += `Me interesa hacer un pedido de:\n• ${p.name}`;
    if (p.price) message += ` — ${formatPrice(p.price)}`;
    message += `\n\n¿Está disponible? ¡Gracias!`;
  } else {
    message += `Quisiera consultar el precio de:\n• ${p.name}`;
    if (p.scientificName) message += ` (${p.scientificName})`;
    message += `\n\n¡Gracias!`;
  }

  const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

// ── Modal de producto ────────────────────────────────────
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  state.modalProduct = product;

  const modal = document.getElementById('product-modal');
  const image = document.getElementById('modal-image');
  const body  = document.getElementById('modal-body');
  if (!modal || !image || !body) return;

  image.innerHTML = renderProductImage(product, true);

  const priceHtml = product.price
    ? `<div style="font-family:'Libre Baskerville',serif; font-size:1.75rem; font-weight:700; color:var(--verde);">
        ${formatPrice(product.price)}
        ${product.priceNote
          ? `<span style="font-size:0.75rem; color:#999; font-family:'Nunito',sans-serif; font-weight:400; margin-left:0.5rem">${product.priceNote}</span>`
          : ''}
       </div>`
    : `<div style="font-family:'Nunito',sans-serif; font-size:0.85rem; color:#999; font-style:italic;">
        Precio a consultar</div>`;

  const envBadge = product.environment
    ? `<span style="display:inline-block; background:var(--verde-light); color:var(--verde); font-family:'Nunito',sans-serif; font-size:0.65rem; font-weight:600; letter-spacing:0.08em; padding:0.3rem 0.75rem; border-radius:2px; text-transform:uppercase;">
        ☀ ${product.environment}</span>`
    : '';

  const careHtml = product.care ? `
    <div style="margin-top:1.5rem">
      <div class="section-eyebrow" style="margin-bottom:0.75rem">Cuidados</div>
      <div class="care-grid">
        <div class="care-item">
          <div class="care-item-label">💧 Riego</div>
          <div class="care-item-text">${product.care.watering}</div>
        </div>
        <div class="care-item">
          <div class="care-item-label">☀️ Luz</div>
          <div class="care-item-text">${product.care.light}</div>
        </div>
        <div class="care-item">
          <div class="care-item-label">💦 Humedad</div>
          <div class="care-item-text">${product.care.humidity}</div>
        </div>
        <div class="care-item">
          <div class="care-item-label">✂️ Mantenimiento</div>
          <div class="care-item-text">${product.care.maintenance}</div>
        </div>
      </div>
    </div>` : '';

  const descHtml = product.description
    ? `<p style="font-family:'Nunito',sans-serif; font-size:0.875rem; color:var(--texto); line-height:1.7; margin-bottom:1rem">${product.description}</p>`
    : '';

  const ctaModal = buildModalCTA(product);

  body.innerHTML = `
    <div class="section-eyebrow">${getCategoryLabel(product.category)}</div>
    <h2 style="font-family:'Libre Baskerville',serif; font-size:1.75rem; color:var(--verde); margin-bottom:0.25rem">${product.name}</h2>
    ${product.scientificName
      ? `<p style="font-family:'Nunito',sans-serif; font-size:0.8rem; font-style:italic; color:#999; margin-bottom:0.875rem">${product.scientificName}</p>`
      : ''}
    <div style="margin-bottom:1rem; display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center">
      ${envBadge}
      ${product.dimensions
        ? `<span style="display:inline-block; background:var(--verde-light); color:var(--verde); font-family:'Nunito',sans-serif; font-size:0.65rem; font-weight:600; padding:0.3rem 0.75rem; border-radius:2px;">📐 ${product.dimensions}</span>`
        : ''}
    </div>
    <div class="divider"></div>
    ${descHtml}
    ${priceHtml}
    ${careHtml}
    <div style="margin-top:1.5rem; display:flex; flex-direction:column; gap:0.75rem">
      ${ctaModal}
    </div>`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close')?.focus();
}

function buildModalCTA(product) {
  if (product.stock === 'out_of_stock') {
    return `<button class="btn-primary opacity-50" disabled style="justify-content:center">Agotado</button>`;
  }
  if (product.orderType === 'whatsapp') {
    return `
      <button class="btn-whatsapp" onclick="openWhatsAppProduct('${product.id}')"
        style="justify-content:center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Solicitar por WhatsApp (Por Encargo)</button>`;
  }
  if (product.orderType === 'quote' || !product.price) {
    return `
      <button class="btn-whatsapp" onclick="openWhatsAppProduct('${product.id}')"
        style="justify-content:center">Consultar precio por WhatsApp</button>`;
  }
  return `
    <button class="btn-primary" onclick="addToCart('${product.id}'); closeProductModal()"
      style="justify-content:center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      Añadir al carrito</button>
    <button class="btn-whatsapp" onclick="openWhatsAppProduct('${product.id}')"
      style="justify-content:center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Preguntar por WhatsApp</button>`;
}

function closeProductModal() {
  document.getElementById('product-modal')?.classList.remove('open');
  document.body.style.overflow = '';
  state.modalProduct = null;
}

// ── Navegación ───────────────────────────────────────────
function initNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    }
  }, { passive: true });

  // Scroll spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => spyObserver.observe(s));
}

function initMobileMenu() {
  const btn   = document.getElementById('menu-btn');
  const close = document.getElementById('menu-close');
  const menu  = document.getElementById('mobile-menu');
  const links = menu?.querySelectorAll('.mobile-nav-link');

  btn?.addEventListener('click', () => menu?.classList.add('open'));
  close?.addEventListener('click', () => menu?.classList.remove('open'));
  links?.forEach(link => link.addEventListener('click', () => menu?.classList.remove('open')));
}

// ── Animaciones fade-in ──────────────────────────────────
function initFadeObserver() {
  const elements = document.querySelectorAll('.fade-in-up:not(.visible)');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// ── Toast notification ───────────────────────────────────
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> ${message}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Formulario de contacto ───────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = form.querySelector('#contact-name')?.value?.trim();
    const phone   = form.querySelector('#contact-phone')?.value?.trim();
    const message = form.querySelector('#contact-message')?.value?.trim();

    if (!name || !message) {
      showToast('Por favor completa nombre y mensaje');
      return;
    }

    const waMessage = `Hola ${CONFIG.STORE_NAME} 👋\n\nSoy *${name}*${phone ? ` (📱 ${phone})` : ''}.\n\n${message}`;
    const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    window.open(url, '_blank', 'noopener');
    form.reset();
    showToast('¡Mensaje enviado por WhatsApp! 🌿');
  });
}

// ── Enlazar catálogo desde hero ──────────────────────────
function scrollToCatalog() {
  document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
}

// ── Inicialización ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  updateCartUI();
  renderCatalog();
  initFilters();
  initSearch();
  initNav();
  initMobileMenu();
  initFadeObserver();
  initContactForm();

  // Cerrar carrito con overlay
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

  // Cerrar modal con overlay
  document.querySelector('.modal-overlay')?.addEventListener('click', closeProductModal);

  // ESC para cerrar modales
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCart();
      document.getElementById('mobile-menu')?.classList.remove('open');
    }
  });

  // Navbar inicial transparente (solo en index)
  if (!window.location.pathname.includes('catalogo')) {
    document.getElementById('navbar')?.classList.add('transparent');
  }

  // Leer ?cat= de la URL para pre-filtrar el catálogo
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam && document.getElementById('products-grid')) {
    const validCats = ['todos','populares','florales','ornamentales','suculentas','cercos','macetas','sustratos'];
    if (validCats.includes(catParam)) {
      state.activeFilter = catParam;
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === catParam);
      });
      renderCatalog();
    }
  }
});
