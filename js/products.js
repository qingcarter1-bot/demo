const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 1229,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop",
    category: "premium",
    storage: "256 Go",
    color: "Titane naturel",
    rating: 4.8,
    reviews: 342,
    badge: "Nouveau",
    description: "Puce A17 Pro, appareil photo 48 Mpx, titane de qualité aérospatiale et écran Super Retina XDR de 6,1 pouces.",
    specs: {
      ecran: "6,1\" OLED 120 Hz",
      processeur: "Apple A17 Pro",
      ram: "8 Go",
      batterie: "Jusqu'à 23h vidéo",
      camera: "48 + 12 + 12 Mpx"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1199,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop",
    category: "premium",
    storage: "512 Go",
    color: "Noir titane",
    rating: 4.7,
    reviews: 289,
    badge: "Best-seller",
    description: "S Pen intégré, zoom 100x Space Zoom, Galaxy AI et écran Dynamic AMOLED 2X de 6,8 pouces.",
    specs: {
      ecran: "6,8\" AMOLED 120 Hz",
      processeur: "Snapdragon 8 Gen 3",
      ram: "12 Go",
      batterie: "5000 mAh",
      camera: "200 + 50 + 12 + 10 Mpx"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 899,
    oldPrice: 999,
    image: "https://bizweb.dktcdn.net/100/168/366/products/15-85b1197f-9424-4e78-965e-a69e44f6099e-db457544-4dd6-45a3-acb4-bc352c24e063.png?v=1705889443903",
    category: "premium",
    storage: "128 Go",
    color: "Bleu baie",
    rating: 4.6,
    reviews: 156,
    badge: "Promo",
    description: "Meilleure photo de sa catégorie grâce à Google AI, écran LTPO OLED et 7 ans de mises à jour Android.",
    specs: {
      ecran: "6,7\" OLED 120 Hz",
      processeur: "Google Tensor G3",
      ram: "12 Go",
      batterie: "5050 mAh",
      camera: "50 + 48 + 48 Mpx"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 699,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
    category: "milieu",
    storage: "256 Go",
    color: "Noir",
    rating: 4.5,
    reviews: 98,
    badge: null,
    description: "Leica Summilux, Snapdragon 8 Gen 3 et charge rapide 90W pour un rapport qualité-prix exceptionnel.",
    specs: {
      ecran: "6,36\" AMOLED 120 Hz",
      processeur: "Snapdragon 8 Gen 3",
      ram: "12 Go",
      batterie: "4610 mAh",
      camera: "50 + 50 + 50 Mpx"
    },
    inStock: true
  },
  {
    id: 5,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 799,
    oldPrice: 849,
    image: "https://image01.oneplus.net/media/202405/28/e2566b9853071dbb7fe9306713bbe51f.png?x-amz-process=image/format,webp/quality,Q_80",
    category: "milieu",
    storage: "256 Go",
    color: "Vert flowy",
    rating: 4.4,
    reviews: 74,
    badge: null,
    description: "Charge SUPERVOOC 100W, écran 2K 120 Hz et Hasselblad Camera pour une expérience flagship abordable.",
    specs: {
      ecran: "6,82\" AMOLED 120 Hz",
      processeur: "Snapdragon 8 Gen 3",
      ram: "16 Go",
      batterie: "5400 mAh",
      camera: "50 + 64 + 48 Mpx"
    },
    inStock: true
  },
  {
    id: 6,
    name: "iPhone SE",
    brand: "Apple",
    price: 529,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=600&fit=crop",
    category: "budget",
    storage: "128 Go",
    color: "Minuit",
    rating: 4.2,
    reviews: 421,
    badge: "Économique",
    description: "La puissance de la puce A15 Bionic dans un format compact et abordable, avec Touch ID.",
    specs: {
      ecran: "4,7\" Retina HD",
      processeur: "Apple A15 Bionic",
      ram: "4 Go",
      batterie: "Jusqu'à 15h vidéo",
      camera: "12 Mpx"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Samsung Galaxy A55",
    brand: "Samsung",
    price: 449,
    oldPrice: 499,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop",
    category: "budget",
    storage: "128 Go",
    color: "Bleu ciel",
    rating: 4.3,
    reviews: 203,
    badge: "Promo",
    description: "Design premium, écran Super AMOLED 120 Hz et protection IP67 à prix accessible.",
    specs: {
      ecran: "6,6\" AMOLED 120 Hz",
      processeur: "Exynos 1480",
      ram: "8 Go",
      batterie: "5000 mAh",
      camera: "50 + 12 + 5 Mpx"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Nothing Phone (2)",
    brand: "Nothing",
    price: 599,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=600&fit=crop",
    category: "milieu",
    storage: "256 Go",
    color: "Blanc",
    rating: 4.4,
    reviews: 112,
    badge: "Design",
    description: "Design Glyph unique, Nothing OS 2.0 épuré et Snapdragon 8+ Gen 1 pour une expérience distinctive.",
    specs: {
      ecran: "6,7\" AMOLED 120 Hz",
      processeur: "Snapdragon 8+ Gen 1",
      ram: "12 Go",
      batterie: "4700 mAh",
      camera: "50 + 50 Mpx"
    },
    inStock: true
  },
  {
  
  id: 9,
  name: "iPhone 15",
  brand: "Apple",
  price: 969,
  oldPrice: 1029,
  image: "https://images.bfmtv.com/yydnrOfcmbmZZlafkq392xbhufU=/0x0:1600x900/1600x0/images/Amazon-parait-genereux-avec-cette-promo-de-grande-ampleur-sur-l-iPhone-15-Apple-2243344.jpg",
  category: "smartphone",
  storage: "128 Go",
  color: "Noir",
  rating: 4.8,
  reviews: 3245,
  badge: "Nouveau",
  description:
    "L'iPhone 15 offre un écran Super Retina XDR de 6,1 pouces, la puce A16 Bionic, un appareil photo principal de 48 Mpx et un port USB-C pour des performances rapides et une excellente qualité photo.",
  specs: {
    ecran: '6,1" Super Retina XDR OLED',
    processeur: "Apple A16 Bionic",
    ram: "6 Go",
    batterie: "Jusqu'à 20 h de lecture vidéo",
    camera: "48 Mpx + 12 Mpx (Ultra grand-angle)",
  },
  inStock: true
}
]

function getProductById(id) {
  return PRODUCTS.find(p => p.id === Number(id));
}

function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '★';
  if (half) stars += '½';
  const empty = 5 - Math.ceil(rating);
  for (let i = 0; i < empty; i++) stars += '☆';
  return stars;
}
