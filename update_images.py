import re
import os

products_file = 'data/products.js'
images_dir = 'imganes Catalogo'

with open(products_file, 'r', encoding='utf-8') as f:
    content = f.read()

images = os.listdir(images_dir)
def clean_name(n):
    return re.sub(r'[^a-z0-9]', '', n.lower().replace('ñ', 'n'))

image_map = {clean_name(os.path.splitext(img)[0]): img for img in images}

# Find all occurrences of name and image: null
pattern = r'(name:\s*"([^"]+)",[\s\S]*?image:\s*)null'

def replacer(match):
    prefix = match.group(1)
    name = match.group(2)
    cname = clean_name(name)
    best_match = None
    
    for img_cname, img_file in image_map.items():
        if img_cname == cname or img_cname in cname or cname in img_cname:
            best_match = img_file
            break
            
    if cname == 'troncodebasil': best_match = 'tronco de brazil.jpg'
    if cname == 'alocasiafridec': best_match = 'Alocacia Fredic.jpg'
    if cname == 'alocasiaodora': best_match = 'Alocacia Dorada.jpg'
    if cname == 'caucho': best_match = 'Caucho 1.png'
    if cname == 'cauchop14': best_match = 'Caucho 1.png'
    if cname == 'besitodeflor': best_match = 'Basito.jpg'
    if cname == 'corazonherido': best_match = 'Corazon Herido.jpg'
    if cname == 'noviodeflor': best_match = 'Novio.png'
    if cname == 'anturiodeflorimportado': best_match = 'anthurio.jpg'

    if best_match:
        return f'{prefix}"imganes Catalogo/{best_match}"'
    return match.group(0)

new_content = re.sub(pattern, replacer, content)

with open(products_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated products.js via python")
