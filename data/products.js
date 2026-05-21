// ============================================================
// VIVERO EL GRANJERO — Base de datos de productos
// Editar este archivo para actualizar precios, stock e imágenes
//
// orderType:
//   "direct"   → botón "Añadir al carrito"
//   "whatsapp" → botón "Pedir por WhatsApp" (Por Encargo)
//   "quote"    → botón "Consultar precio" (precio desconocido)
//
// stock: "available" | "out_of_stock"
// price: número en COP, o null = "Consultar precio"
// image: ruta relativa a la foto del producto, o null = placeholder
// ============================================================

const PRODUCTS = [

  // ── PLANTAS POPULARES ────────────────────────────────────
  {
    id: "POP-001",
    name: "Miami Variegado",
    scientificName: null,
    category: "populares",
    environment: "Interior / Exterior",
    price: 10000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/miami.png",
    tags: ["variegado", "decorativo"],
    care: {
      watering: "Riego moderado, cada 7-10 días. Deja secar el sustrato entre riegos.",
      light: "Luz indirecta brillante. Evita el sol directo del mediodía.",
      humidity: "Humedad moderada. Rocía las hojas ocasionalmente.",
      maintenance: "Limpia las hojas con un paño húmedo para mantener su brillo."
    }
  },
  {
    id: "POP-002",
    name: "Tomate Enano",
    scientificName: null,
    category: "populares",
    environment: "Exterior",
    price: 12000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Tomate enano (cherry).jpg",
    tags: ["exterior", "ornamental"],
    care: {
      watering: "Riego frecuente, mantén el sustrato húmedo pero no encharcado.",
      light: "Sol directo mínimo 6 horas al día.",
      humidity: "Ambiente seco tolerable.",
      maintenance: "Poda los brotes laterales para estimular crecimiento vertical."
    }
  },
  {
    id: "POP-003",
    name: "Jade Enano",
    scientificName: "Crassula ovata",
    category: "populares",
    environment: "Interior",
    price: 15000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/jade enano.jpg",
    tags: ["suculenta", "interior", "bajo-mantenimiento"],
    care: {
      watering: "Muy poco riego, cada 14-21 días. Es suculenta.",
      light: "Luz indirecta brillante o sol suave de la mañana.",
      humidity: "Tolera ambientes secos. No requiere humidificación.",
      maintenance: "Prácticamente autosuficiente. Trasplanta cada 2 años."
    }
  },
  {
    id: "POP-004",
    name: "Clavellina",
    scientificName: null,
    category: "populares",
    environment: "Exterior / Interior",
    price: 8000,
    stock: "available",
    orderType: "direct",
    image: null,
    tags: ["floral", "colorida"],
    care: {
      watering: "Riego regular, cada 5-7 días. No dejes secar completamente.",
      light: "Sol indirecto o semisombra. Ideal cerca de ventanas.",
      humidity: "Moderada. Agradece la ventilación.",
      maintenance: "Retira flores marchitas para prolongar la floración."
    }
  },

  // ── FLORALES ─────────────────────────────────────────────
  {
    id: "FLO-001",
    name: "Besito de Flor",
    scientificName: "Impatiens walleriana",
    category: "florales",
    environment: "Exterior / Interior",
    price: 10000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Basito.jpg",
    tags: ["floral", "colorida", "sombra"],
    care: {
      watering: "Riego abundante, cada 3-4 días. Muy sensible a la sequía.",
      light: "Semisombra o luz indirecta. Ideal bajo árboles o aleros.",
      humidity: "Alta humedad. Agradece nebulizaciones frecuentes.",
      maintenance: "Pellizca los tallos para un crecimiento más compacto y florido."
    }
  },
  {
    id: "FLO-002",
    name: "Primavera",
    scientificName: null,
    category: "florales",
    environment: "Interior",
    price: 12000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Primavera.jpg",
    tags: ["floral", "interior", "temporada"],
    care: {
      watering: "Riego moderado. Mantén el sustrato ligeramente húmedo.",
      light: "Luz indirecta brillante. Evita sol directo.",
      humidity: "Moderada a alta.",
      maintenance: "Retira flores marchitas regularmente."
    }
  },
  {
    id: "FLO-003",
    name: "Besito Canasta",
    scientificName: "Impatiens walleriana",
    category: "florales",
    environment: "Exterior / Interior",
    price: 35000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Besito Canasta.png",
    tags: ["floral", "canasta", "colgante"],
    care: {
      watering: "Riego diario en verano. Las canastas se secan rápido.",
      light: "Semisombra. Protegida del sol del mediodía.",
      humidity: "Alta. Nebuliza frecuentemente.",
      maintenance: "Fertiliza mensualmente para mantener la floración."
    }
  },
  {
    id: "FLO-004",
    name: "Calimbrachoa",
    scientificName: "Calibrachoa sp.",
    category: "florales",
    environment: "Exterior",
    price: 12000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Calimbrachoa.jpg",
    tags: ["floral", "exterior", "colgante"],
    care: {
      watering: "Riego frecuente, cada 2-3 días. No tolera encharcamiento.",
      light: "Sol directo mínimo 4-6 horas.",
      humidity: "Moderada.",
      maintenance: "Autolimpiante. Fertiliza cada 2 semanas."
    }
  },
  {
    id: "FLO-005",
    name: "Corazón Herido",
    scientificName: null,
    category: "florales",
    environment: "Exterior / Interior",
    price: 10500,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Basito.jpg",
    tags: ["floral", "ornamental"],
    care: {
      watering: "Riego moderado, cada 5-7 días.",
      light: "Luz indirecta brillante.",
      humidity: "Moderada a alta.",
      maintenance: "Retira las flores secas para nuevas brotaciones."
    }
  },
  {
    id: "FLO-006",
    name: "Novio de Flor",
    scientificName: null,
    category: "florales",
    environment: "Exterior / Interior",
    price: 10000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Novio.png",
    tags: ["floral", "ornamental"],
    care: {
      watering: "Riego moderado, mantén sustrato húmedo sin encharcamiento.",
      light: "Semisombra o luz indirecta.",
      humidity: "Moderada.",
      maintenance: "Poda leve después de floración para estimular nuevas flores."
    }
  },
  {
    id: "FLO-007",
    name: "Biflora",
    scientificName: null,
    category: "florales",
    environment: "Exterior",
    price: 20000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Biflora.png",
    tags: ["floral", "exterior", "bicolor"],
    care: {
      watering: "Riego regular cada 4-5 días.",
      light: "Sol directo o semisombra.",
      humidity: "Moderada.",
      maintenance: "Poda después de floración."
    }
  },
  {
    id: "FLO-008",
    name: "Anturio de Flor Importado",
    scientificName: "Anthurium andraeanum",
    category: "florales",
    environment: "Interior",
    price: 57900,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/anthurio.jpg",
    tags: ["floral", "interior", "exótico", "premium"],
    care: {
      watering: "Riego moderado, cada 7-10 días. Sensible al exceso.",
      light: "Luz indirecta brillante. Nunca sol directo.",
      humidity: "Alta (60-80%). Ideal en baños o cocinas.",
      maintenance: "Limpia las flores con paño húmedo. Trasplanta cada 2 años."
    }
  },
  {
    id: "FLO-009",
    name: "Cineraria Larga Vida",
    scientificName: "Pericallis × hybrida",
    category: "florales",
    environment: "Interior",
    price: 11900,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Cineraria largavid.jpg",
    tags: ["floral", "interior", "temporada"],
    care: {
      watering: "Riego frecuente, cada 3-4 días. No mojes las flores.",
      light: "Luz indirecta brillante.",
      humidity: "Moderada.",
      maintenance: "Planta de temporada. Retira flores secas."
    }
  },
  {
    id: "FLO-010",
    name: "Cuphea Blanca",
    scientificName: "Cuphea hyssopifolia",
    category: "florales",
    environment: "Exterior",
    price: 8000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Novio.png",
    tags: ["floral", "exterior", "mini"],
    care: {
      watering: "Riego moderado, tolera algo de sequía.",
      light: "Sol directo o semisombra.",
      humidity: "Moderada.",
      maintenance: "Poda para mantener forma compacta."
    }
  },

  // ── ORNAMENTALES ─────────────────────────────────────────
  {
    id: "ORN-001",
    name: "Tronco de Basil",
    scientificName: null,
    category: "ornamentales",
    environment: "Interior",
    price: 10000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/tronco de brazil.jpg",
    tags: ["interior", "ornamental"],
    care: {
      watering: "Riego moderado, cada 7-10 días.",
      light: "Luz indirecta. Tolera poca luz.",
      humidity: "Moderada.",
      maintenance: "Limpia las hojas periódicamente."
    }
  },
  {
    id: "ORN-002",
    name: "Millonaria",
    scientificName: null,
    category: "ornamentales",
    environment: "Interior",
    price: 12000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Millonaria P14.jpg",
    tags: ["interior", "trepadora", "ornamental"],
    care: {
      watering: "Riego moderado, cada 7 días.",
      light: "Luz indirecta. Tolera poca luminosidad.",
      humidity: "Moderada a alta.",
      maintenance: "Guía los tallos con tutores. Poda para controlar tamaño."
    }
  },
  {
    id: "ORN-003",
    name: "Fittonia Exótica",
    scientificName: "Fittonia albivenis",
    category: "ornamentales",
    environment: "Interior",
    price: 32900,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/tronco de brazil.jpg",
    tags: ["interior", "colorida", "nervada"],
    care: {
      watering: "Riego frecuente. Mantén sustrato ligeramente húmedo siempre.",
      light: "Sombra o luz muy indirecta. Sensible al sol.",
      humidity: "Alta (60%+). Ideal en terrarios o baños.",
      maintenance: "Muy sensible al frío. Evita corrientes de aire."
    }
  },
  {
    id: "ORN-004",
    name: "Miami Exótico",
    scientificName: null,
    category: "ornamentales",
    environment: "Interior",
    price: 13000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Basito.jpg",
    tags: ["interior", "tropical", "exótico"],
    care: {
      watering: "Riego moderado, cada 7-10 días.",
      light: "Luz indirecta brillante.",
      humidity: "Moderada a alta.",
      maintenance: "Limpia hojas con paño húmedo mensualmente."
    }
  },
  {
    id: "ORN-005",
    name: "Calathea Exótica",
    scientificName: "Calathea sp.",
    category: "ornamentales",
    environment: "Interior",
    price: 19900,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Calathea.jpg",
    tags: ["interior", "tropical", "decorativa"],
    care: {
      watering: "Riego con agua sin cloro, cada 5-7 días.",
      light: "Sombra o luz muy indirecta. Hojas se queman con sol.",
      humidity: "Alta (60-70%). Nebuliza frecuentemente.",
      maintenance: "Usa agua filtrada. Evita el frío y corrientes."
    }
  },
  {
    id: "ORN-006",
    name: "Caucho P14",
    scientificName: "Ficus elastica",
    category: "ornamentales",
    environment: "Interior",
    price: 30000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Caucho 1.png",
    tags: ["interior", "árbol", "statement"],
    care: {
      watering: "Riego moderado, cada 10-14 días. Deja secar entre riegos.",
      light: "Luz indirecta brillante. Tolera algo de sol suave.",
      humidity: "Moderada.",
      maintenance: "Limpia hojas con paño húmedo. Crece lento en interior."
    }
  },
  {
    id: "ORN-007",
    name: "Breynia",
    scientificName: "Breynia disticha",
    category: "ornamentales",
    environment: "Interior",
    price: 15000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Calathea.jpg",
    tags: ["interior", "variegado", "compacto"],
    care: {
      watering: "Riego regular, mantén húmedo sin encharcar.",
      light: "Luz indirecta brillante.",
      humidity: "Moderada a alta.",
      maintenance: "Poda para mantener forma. Sensible al frío."
    }
  },
  {
    id: "ORN-008",
    name: "Alocasia Fridec",
    scientificName: "Alocasia sp.",
    category: "ornamentales",
    environment: "Interior",
    price: 40000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Alocacia Fredic.jpg",
    tags: ["interior", "tropical", "exótico", "grande"],
    care: {
      watering: "Riego moderado. Sensible al exceso y al encharcamiento.",
      light: "Luz indirecta brillante. Nunca sol directo.",
      humidity: "Alta (60%+). Nebuliza o usa humidificador.",
      maintenance: "Temperatura mínima 15°C. Retira hojas amarillas."
    }
  },
  {
    id: "ORN-009",
    name: "Alocasia Odora",
    scientificName: "Alocasia odora",
    category: "ornamentales",
    environment: "Interior",
    price: 40000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Alocacia Dorada.jpg",
    tags: ["interior", "tropical", "grande", "premium"],
    care: {
      watering: "Riego moderado, cada 7-10 días.",
      light: "Luz indirecta brillante.",
      humidity: "Alta. Agradece nebulizaciones.",
      maintenance: "Trasplanta cuando las raíces salgan por el drenaje."
    }
  },
  {
    id: "ORN-010",
    name: "Caucho Grande",
    scientificName: "Ficus elastica",
    category: "ornamentales",
    environment: "Interior",
    price: 87900,
    stock: "available",
    orderType: "whatsapp",
    image: "imganes Catalogo/Caucho grande.jpg",
    tags: ["interior", "árbol", "statement", "grande", "por-encargo"],
    care: {
      watering: "Riego moderado, cada 10-14 días.",
      light: "Luz indirecta brillante.",
      humidity: "Moderada.",
      maintenance: "Planta de gran impacto visual. Requiere espacio amplio."
    }
  },
  {
    id: "ORN-011",
    name: "Carnívora Venus",
    scientificName: "Dionaea muscipula",
    category: "ornamentales",
    environment: "Exterior",
    price: 47500,
    stock: "available",
    orderType: "whatsapp",
    image: "imganes Catalogo/Alocacia Fredic.jpg",
    tags: ["carnívora", "exótico", "especial", "por-encargo"],
    care: {
      watering: "Agua destilada o lluvia ÚNICAMENTE. Nunca agua de grifo.",
      light: "Sol directo mínimo 4 horas.",
      humidity: "Alta. Ambiente húmedo.",
      maintenance: "No alimentes con fertilizantes. Reposa en invierno."
    }
  },
  {
    id: "ORN-012",
    name: "Cordyline Fruticosa",
    scientificName: "Cordyline fruticosa",
    category: "ornamentales",
    environment: "Interior / Exterior semisombra",
    price: null,
    stock: "available",
    orderType: "quote",
    image: "imganes Catalogo/Calathea.jpg",
    tags: ["colorida", "tropical"],
    care: {
      watering: "Riego moderado, cada 7 días.",
      light: "Semisombra o luz indirecta.",
      humidity: "Moderada a alta.",
      maintenance: "Retira hojas inferiores que amarillean."
    }
  },
  {
    id: "ORN-013",
    name: "Reina Plateada",
    scientificName: null,
    category: "ornamentales",
    environment: "Interior / Exterior semisombra",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["plateado", "decorativo"],
    care: {
      watering: "Riego moderado.",
      light: "Luz indirecta brillante.",
      humidity: "Moderada.",
      maintenance: "Limpia hojas para mantener brillo plateado."
    }
  },
  {
    id: "ORN-014",
    name: "Schefflera Variegada",
    scientificName: "Schefflera arboricola",
    category: "ornamentales",
    environment: "Interior / Exterior semisombra",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["variegado", "árbol", "tropical"],
    care: {
      watering: "Riego moderado, deja secar levemente entre riegos.",
      light: "Luz indirecta brillante para mantener variegado.",
      humidity: "Moderada.",
      maintenance: "Tolera poda fuerte. Crece hasta 3m en interior."
    }
  },
  {
    id: "ORN-015",
    name: "Coleo #1",
    scientificName: "Coleus scutellarioides",
    category: "ornamentales",
    environment: "Interior / Exterior semisombra",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["colorida", "rojo", "decorativo"],
    care: {
      watering: "Riego frecuente, cada 4-5 días.",
      light: "Semisombra. Colores más intensos con algo de luz.",
      humidity: "Moderada a alta.",
      maintenance: "Pellizca las flores para más follaje colorido."
    }
  },
  {
    id: "ORN-016",
    name: "Coleo #2",
    scientificName: "Coleus scutellarioides",
    category: "ornamentales",
    environment: "Interior / Exterior semisombra",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["colorida", "morado", "decorativo"],
    care: {
      watering: "Riego frecuente, cada 4-5 días.",
      light: "Semisombra.",
      humidity: "Moderada a alta.",
      maintenance: "Pellizca las flores para más follaje."
    }
  },
  {
    id: "ORN-017",
    name: "Coleo #3",
    scientificName: "Coleus scutellarioides",
    category: "ornamentales",
    environment: "Interior / Exterior semisombra",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["colorida", "amarillo", "decorativo"],
    care: {
      watering: "Riego frecuente.",
      light: "Semisombra.",
      humidity: "Moderada.",
      maintenance: "Retira flores para estimular crecimiento."
    }
  },
  {
    id: "ORN-018",
    name: "Coleo #4",
    scientificName: "Coleus scutellarioides",
    category: "ornamentales",
    environment: "Interior / Exterior semisombra",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["colorida", "verde-rojo"],
    care: {
      watering: "Riego frecuente.",
      light: "Semisombra.",
      humidity: "Moderada.",
      maintenance: "Poda para mantener forma compacta."
    }
  },
  {
    id: "ORN-019",
    name: "Coleo Coral 1",
    scientificName: "Coleus scutellarioides",
    category: "ornamentales",
    environment: "Interior / Exterior semisombra",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["colorida", "coral"],
    care: {
      watering: "Riego frecuente, cada 4-5 días.",
      light: "Semisombra o luz indirecta.",
      humidity: "Moderada a alta.",
      maintenance: "Pellizca flores para estimular follaje."
    }
  },
  {
    id: "ORN-020",
    name: "Coleo Coral 2",
    scientificName: "Coleus scutellarioides",
    category: "ornamentales",
    environment: "Interior / Exterior semisombra",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["colorida", "coral-variegado"],
    care: {
      watering: "Riego frecuente.",
      light: "Semisombra.",
      humidity: "Moderada.",
      maintenance: "Fertiliza mensualmente en época de crecimiento."
    }
  },
  {
    id: "ORN-021",
    name: "Cinta P14",
    scientificName: "Chlorophytum comosum",
    category: "ornamentales",
    environment: "Exterior / Interior",
    price: 12000,
    stock: "available",
    orderType: "direct",
    image: null,
    tags: ["colgante", "variegado", "fácil"],
    care: {
      watering: "Riego moderado, cada 7 días. Tolera sequía.",
      light: "Luz indirecta. Tolera poca luz.",
      humidity: "Moderada. Muy adaptable.",
      maintenance: "Planta casi indestructible. Ideal para principiantes."
    }
  },
  {
    id: "ORN-022",
    name: "Palma Areca",
    scientificName: "Dypsis lutescens",
    category: "ornamentales",
    environment: "Interior / Exterior semisombra",
    price: 17000,
    stock: "available",
    orderType: "direct",
    image: null,
    tags: ["palma", "purificadora", "elegante"],
    care: {
      watering: "Riego moderado, cada 7-10 días.",
      light: "Luz indirecta brillante. Tolera algo de sol suave.",
      humidity: "Moderada a alta.",
      maintenance: "Purifica el aire. Retira hojas amarillas basales."
    }
  },
  {
    id: "ORN-023",
    name: "Real Australiana",
    scientificName: null,
    category: "ornamentales",
    environment: "Exterior",
    price: 14000,
    stock: "available",
    orderType: "direct",
    image: null,
    tags: ["exterior", "ornamental"],
    care: {
      watering: "Riego moderado.",
      light: "Sol directo o semisombra.",
      humidity: "Moderada.",
      maintenance: "Resistente. Poda para mantener forma."
    }
  },
  {
    id: "ORN-024",
    name: "Pino Ciprés",
    scientificName: "Cupressus sempervirens",
    category: "ornamentales",
    environment: "Exterior",
    price: 12000,
    stock: "available",
    orderType: "direct",
    image: null,
    tags: ["exterior", "vertical", "aromático"],
    care: {
      watering: "Riego moderado. Tolera sequía cuando está establecido.",
      light: "Sol directo.",
      humidity: "Baja a moderada.",
      maintenance: "Poda en forma de cono. Muy resistente."
    }
  },

  // ── SUCULENTAS ───────────────────────────────────────────
  {
    id: "SUC-001",
    name: "Crepúsculo Planata",
    scientificName: null,
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "roseta"],
    care: {
      watering: "Riego muy esporádico, cada 14-21 días. Menos es más.",
      light: "Sol directo o luz indirecta muy brillante.",
      humidity: "Ambiente seco. No tolera humedad alta.",
      maintenance: "Drena perfecto. Sustrato para cactus."
    }
  },
  {
    id: "SUC-002",
    name: "Fantasma / Uña de Señora",
    scientificName: null,
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "compacta"],
    care: {
      watering: "Riego mínimo, cada 14-21 días.",
      light: "Sol directo o luz muy brillante.",
      humidity: "Baja.",
      maintenance: "Sustrato bien drenado. No mojes el centro."
    }
  },
  {
    id: "SUC-003",
    name: "Jade Enano Variegado",
    scientificName: "Crassula ovata variegata",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: "imganes Catalogo/jade enano.jpg",
    tags: ["suculenta", "variegado", "arbusto"],
    care: {
      watering: "Riego cada 14-21 días.",
      light: "Luz brillante para mantener el variegado.",
      humidity: "Baja.",
      maintenance: "Poda para dar forma de árbol miniatura."
    }
  },
  {
    id: "SUC-004",
    name: "Jade Común",
    scientificName: "Crassula ovata",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "arbusto", "longevo"],
    care: {
      watering: "Riego muy esporádico, cada 14-21 días.",
      light: "Luz brillante.",
      humidity: "Baja.",
      maintenance: "Puede vivir décadas. Trasplanta cada 3-4 años."
    }
  },
  {
    id: "SUC-005",
    name: "Haworthia Arachnoidea",
    scientificName: "Haworthiopsis arachnoidea",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "roseta", "interior-tolerante"],
    care: {
      watering: "Riego cada 14-21 días.",
      light: "Tolera luz indirecta mejor que otras suculentas.",
      humidity: "Baja a moderada.",
      maintenance: "Ideal para escritorios y espacios con poca luz."
    }
  },
  {
    id: "SUC-006",
    name: "Siempre Viva",
    scientificName: "Sempervivum sp.",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "roseta", "resistente"],
    care: {
      watering: "Riego muy esporádico.",
      light: "Sol directo.",
      humidity: "Baja.",
      maintenance: "Produce hijuelos que se pueden separar fácilmente."
    }
  },
  {
    id: "SUC-007",
    name: "Crassula Ericoides",
    scientificName: "Crassula ericoides",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "arbusto-miniatura"],
    care: {
      watering: "Riego mínimo, cada 14-21 días.",
      light: "Sol o luz muy brillante.",
      humidity: "Baja.",
      maintenance: "Sustrato bien drenado. Poda para forma compacta."
    }
  },
  {
    id: "SUC-008",
    name: "Aloe de la Juventud",
    scientificName: "Aloe juvenna",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "aloe", "compacto"],
    care: {
      watering: "Riego cada 14-21 días.",
      light: "Sol directo o luz brillante.",
      humidity: "Baja.",
      maintenance: "Produce hijuelos. Sustrato drenante."
    }
  },
  {
    id: "SUC-009",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "medicinal", "multiusos"],
    care: {
      watering: "Riego cada 14-21 días. Muy resistente a la sequía.",
      light: "Sol directo o luz indirecta brillante.",
      humidity: "Baja.",
      maintenance: "Propiedades medicinales. Produce hijuelos fácilmente."
    }
  },
  {
    id: "SUC-010",
    name: "Corona de Espinas Gigante",
    scientificName: "Euphorbia milii",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "floración", "espinas"],
    care: {
      watering: "Riego moderado para suculenta, cada 10-14 días.",
      light: "Sol directo o semisombra.",
      humidity: "Moderada.",
      maintenance: "Florece casi todo el año. El látex es irritante, maneja con guantes."
    }
  },
  {
    id: "SUC-011",
    name: "Corona de Espinas",
    scientificName: "Euphorbia milii",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "floración", "espinas"],
    care: {
      watering: "Riego cada 10-14 días.",
      light: "Luz brillante o sol.",
      humidity: "Moderada.",
      maintenance: "Florece continuamente con suficiente luz."
    }
  },
  {
    id: "SUC-012",
    name: "Mala Madre #1",
    scientificName: "Chlorophytum comosum",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "colgante", "hijuelos"],
    care: {
      watering: "Riego moderado.",
      light: "Luz indirecta.",
      humidity: "Moderada.",
      maintenance: "Produce hijuelos en tallos colgantes. Fácil de propagar."
    }
  },
  {
    id: "SUC-013",
    name: "Mala Madre #2",
    scientificName: "Chlorophytum comosum",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "colgante"],
    care: {
      watering: "Riego moderado.",
      light: "Luz indirecta.",
      humidity: "Moderada.",
      maintenance: "Variedad alternativa. Mismos cuidados que Mala Madre #1."
    }
  },
  {
    id: "SUC-014",
    name: "Agave Hoja Estrecha",
    scientificName: "Agave angustifolia",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "agave", "arquitectónico"],
    care: {
      watering: "Riego muy esporádico, mensual en invierno.",
      light: "Sol directo pleno.",
      humidity: "Baja.",
      maintenance: "Crece lento pero espectacular. Las espinas son punzantes."
    }
  },
  {
    id: "SUC-015",
    name: "Dedos de Bebé",
    scientificName: "Pachyphytum oviferum",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "pastel", "delicada"],
    care: {
      watering: "Riego muy escaso. El polvo natural de las hojas no debes tocarlo.",
      light: "Sol o luz muy brillante para mantener el color.",
      humidity: "Baja.",
      maintenance: "No toques las hojas o perderán su característico polvo plateado."
    }
  },
  {
    id: "SUC-016",
    name: "Flor de Piedra",
    scientificName: "Lithops sp.",
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "curiosa", "cactiforme"],
    care: {
      watering: "Riego mínimo extremo. En época de muda: nada de agua.",
      light: "Sol directo varias horas.",
      humidity: "Muy baja.",
      maintenance: "Planta fascinante que imita piedras. Paciencia para su floración."
    }
  },
  {
    id: "SUC-017",
    name: "Peluca",
    scientificName: null,
    category: "suculentas",
    environment: "Exterior / Interior iluminado",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["suculenta", "colgante", "curiosa"],
    care: {
      watering: "Riego muy esporádico.",
      light: "Luz brillante.",
      humidity: "Baja.",
      maintenance: "Sus tallos colgantes forman una silueta espectacular."
    }
  },

  // ── CERCOS ───────────────────────────────────────────────
  {
    id: "CER-001",
    name: "Eugenio 20-25cm",
    scientificName: "Syzygium paniculatum",
    category: "cercos",
    environment: "Exterior",
    price: 2500,
    stock: "available",
    orderType: "direct",
    image: null,
    tags: ["cerco", "seto", "mayoreo"],
    priceNote: "por unidad — venta al detal y por mayor",
    care: {
      watering: "Riego frecuente al establecerse, luego moderado.",
      light: "Sol directo o semisombra.",
      humidity: "Moderada.",
      maintenance: "Poda 2-3 veces al año para mantener forma de seto."
    }
  },
  {
    id: "CER-002",
    name: "Duranta Variegada Amarilla",
    scientificName: "Duranta erecta",
    category: "cercos",
    environment: "Exterior",
    price: 2500,
    stock: "available",
    orderType: "direct",
    image: null,
    tags: ["cerco", "variegado", "amarillo"],
    priceNote: "por unidad — venta al detal y por mayor",
    care: {
      watering: "Riego moderado.",
      light: "Sol directo para colores más intensos.",
      humidity: "Moderada.",
      maintenance: "Poda frecuente para mantener densidad del seto."
    }
  },
  {
    id: "CER-003",
    name: "Verbena Morada",
    scientificName: "Verbena sp.",
    category: "cercos",
    environment: "Exterior",
    price: 3000,
    stock: "available",
    orderType: "direct",
    image: null,
    tags: ["cerco", "floral", "morado"],
    priceNote: "por unidad",
    care: {
      watering: "Riego moderado.",
      light: "Sol directo.",
      humidity: "Moderada.",
      maintenance: "Florece casi todo el año con poda regular."
    }
  },
  {
    id: "CER-004",
    name: "Iresine Herbstii",
    scientificName: "Iresine herbstii",
    category: "cercos",
    environment: "Exterior",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["cerco", "rojo", "colorido"],
    care: {
      watering: "Riego frecuente.",
      light: "Sol directo para colores intensos.",
      humidity: "Moderada.",
      maintenance: "Poda frecuente para mantener densidad."
    }
  },
  {
    id: "CER-005",
    name: "Margarita Amarilla",
    scientificName: "Euryops pectinatus",
    category: "cercos",
    environment: "Exterior",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["cerco", "floral", "amarillo"],
    care: {
      watering: "Riego moderado.",
      light: "Sol directo.",
      humidity: "Moderada.",
      maintenance: "Florece casi todo el año. Retira flores marchitas."
    }
  },
  {
    id: "CER-006",
    name: "Margarita Blanca",
    scientificName: "Argyranthemum frutescens",
    category: "cercos",
    environment: "Exterior",
    price: null,
    stock: "available",
    orderType: "quote",
    image: null,
    tags: ["cerco", "floral", "blanco"],
    care: {
      watering: "Riego moderado.",
      light: "Sol directo.",
      humidity: "Moderada.",
      maintenance: "Poda después de floración masiva."
    }
  },

  // ── MACETAS VG ───────────────────────────────────────────
  {
    id: "MAC-001",
    name: "Bowl PQ",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 22000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Bowl.jpg",
    tags: ["maceta", "bowl", "plástico"],
    dimensions: "24DM × 12cm alto",
    colorOptions: false,
    care: null
  },
  {
    id: "MAC-002",
    name: "Rattan MU Mediana",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 14000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Bowl.jpg",
    tags: ["maceta", "rattan", "natural"],
    dimensions: "19.5DM × 19.5cm alto",
    colorOptions: false,
    care: null
  },
  {
    id: "MAC-003",
    name: "Rattan MU Grande",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 19000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Bowl.jpg",
    tags: ["maceta", "rattan", "natural", "grande"],
    dimensions: "23DM × 25cm alto",
    colorOptions: false,
    care: null
  },
  {
    id: "MAC-004",
    name: "Prisma #18",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 10000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Prisma No18.jpg",
    tags: ["maceta", "geométrica", "colores"],
    dimensions: "17DM × 15cm alto",
    colorOptions: true,
    care: null
  },
  {
    id: "MAC-005",
    name: "Cilindro",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 10000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Cilindro.jpg",
    tags: ["maceta", "cilíndrica", "minimalista"],
    dimensions: "14DM × 13cm alto",
    colorOptions: true,
    care: null
  },
  {
    id: "MAC-006",
    name: "Roca",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 13000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Roca.jpg",
    tags: ["maceta", "textura-roca", "decorativa"],
    dimensions: "24DM × 20cm alto",
    colorOptions: true,
    care: null
  },
  {
    id: "MAC-007",
    name: "Roma PQ",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 9900,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Prisma No18.jpg",
    tags: ["maceta", "clásica", "colores"],
    dimensions: null,
    colorOptions: true,
    care: null
  },
  {
    id: "MAC-008",
    name: "Roma Grande",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 45000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Roma Grande.jpg",
    tags: ["maceta", "clásica", "grande"],
    dimensions: "40DM × 35cm alto",
    colorOptions: true,
    care: null
  },
  {
    id: "MAC-009",
    name: "Rattan Redonda",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 16900,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Roma Grande.jpg",
    tags: ["maceta", "rattan", "redonda"],
    dimensions: "26 × 23cm",
    colorOptions: false,
    care: null
  },
  {
    id: "MAC-010",
    name: "Diamante",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 20000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Diamante.jpg",
    tags: ["maceta", "geométrica", "premium"],
    dimensions: "21 × 20cm",
    colorOptions: false,
    care: null
  },
  {
    id: "MAC-011",
    name: "Onda #28",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 18000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Onda 28.jpg",
    tags: ["maceta", "onda", "moderna"],
    dimensions: "27 × 28cm",
    colorOptions: true,
    care: null
  },
  {
    id: "MAC-012",
    name: "Onda Mini",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 3000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Diamante.jpg",
    tags: ["maceta", "mini", "suculentas"],
    dimensions: "10 × 10cm",
    colorOptions: true,
    care: null
  },
  {
    id: "MAC-013",
    name: "Estriada #36",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 22000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Estriada No36.jpg",
    tags: ["maceta", "estriada", "texturizada"],
    dimensions: "34 × 19cm",
    colorOptions: true,
    care: null
  },
  {
    id: "MAC-014",
    name: "Ema 36",
    scientificName: null,
    category: "macetas",
    environment: null,
    price: 36000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Ema.jpg",
    tags: ["maceta", "grande", "premium"],
    dimensions: "36 × 36cm",
    colorOptions: true,
    care: null
  },

  // ── SUSTRATOS ────────────────────────────────────────────
  {
    id: "SUS-001",
    name: "Sustrato Universal",
    scientificName: null,
    category: "sustratos",
    environment: null,
    price: 6000,
    stock: "available",
    orderType: "direct",
    image: "imganes Catalogo/Estriada No36.jpg",
    tags: ["sustrato", "universal", "mezcla"],
    dimensions: "10 kg",
    care: null,
    description: "Mezcla con cascarilla de arroz. Ideal para la mayoría de plantas de interior y exterior."
  },
  {
    id: "SUS-002",
    name: "Cascarilla de Arroz",
    scientificName: null,
    category: "sustratos",
    environment: null,
    price: 6000,
    stock: "available",
    orderType: "direct",
    image: null,
    tags: ["sustrato", "drenaje", "aireación"],
    care: null,
    description: "Mejora el drenaje y aireación de cualquier sustrato. Ideal para suculentas y cactus."
  }

]; // end PRODUCTS
