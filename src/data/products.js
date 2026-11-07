import gamepadRed from '../assets/gamepad.png'
import keyboard from '../assets/keyboard.png'
import boots from '../assets/boots.png'
import toothPaste from '../assets/toothPaste.png'
import bag from '../assets/bag.png'
import camera from '../assets/camera.png'
import chair from '../assets/chair.png'
import gamePadBlack from '../assets/gamePadBlack.png'
import greenJacket from '../assets/greeJacket.png'
import hdTv from '../assets/hdTv.png'
import woodenDesk from '../assets/woodenDesk.png'
import toyCar from '../assets/toyCar.png'
import speaker from '../assets/speaker.png'
import pinkJacket from '../assets/pinkJacket.png'
import laptop from '../assets/laptop.png'
import dogFood from '../assets/dogFood.png'
import gamePadWhite from '../assets/gamepad2.png'
import padSideView1 from '../assets/padsideView1.png'
import padSideView2 from '../assets/padsideview2.png'
import padSideView3 from '../assets/padsideview3.png'
import padSideView4 from '../assets/padsideview4.png'
import iphone from '../assets/iphone.png'
import jblImage from '../assets/jblimage.png'

export const products = [
  {
    id: 'havit-hv-g92-gamepad',
    category: 'gaming',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: gamepadRed,
    name: 'HAVIT HV-G92 Gamepad',
    currentPrice: '$120',
    oldPrice: '$160',
    rating: 88,
    colors: [
      { name: 'Red', value: '#DB4444', image: gamepadRed },
      { name: 'White', value: '#FFFFFF', image: gamePadWhite },
    ],
    productImages: [padSideView1, padSideView2, padSideView3, padSideView4],
  },
  {
    id: 'ak-900-wired-keyboard',
    category: 'computers',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: keyboard,
    name: 'AK-900 Wired Keyboard',
    currentPrice: '$960',
    oldPrice: '$1160',
    rating: 75,
    productImages: [],
  },
  {
    id: 'ips-lcd-gaming-monitor',
    category: 'computers',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: hdTv,
    name: 'IPS LCD Gaming Monitor',
    currentPrice: '$370',
    oldPrice: '$400',
    rating: 99,
    productImages: [],
  },
  {
    id: 's-series-comfort-chair-1',
    category: 'home-lifestyle',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: chair,
    name: 'S-Series Comfort Chair',
    currentPrice: '$375',
    oldPrice: '$400',
    rating: 99,
    productImages: [],
  },
  {
    id: 's-series-comfort-chair-2',
    category: 'home-lifestyle',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: chair,
    name: 'S-Series Comfort Chair',
    currentPrice: '$375',
    oldPrice: '$400',
    rating: 300,
    productImages: [],
  },
  {
    id: 'the-north-coat',
    category: 'womans-fashion',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: pinkJacket,
    name: 'The north coat',
    currentPrice: '$260',
    oldPrice: '$360',
    rating: 65,
    colors: [
      { name: 'Pink', value: '#F2C4CF', image: pinkJacket },
      { name: 'Green', value: '#6D8B5B', image: greenJacket },
    ],
    productImages: [],
  },
  {
    id: 'gucci-duffle-bag',
    category: 'womans-fashion',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: bag,
    name: 'Gucci duffle bag',
    currentPrice: '$960',
    oldPrice: '$1160',
    rating: 65,
    productImages: [],
  },
  {
    id: 'rgb-liquid-cpu-cooler',
    category: 'computers',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: speaker,
    name: 'RGB liquid CPU Cooler',
    currentPrice: '$160',
    oldPrice: '$170',
    rating: 65,
    productImages: [],
  },
  {
    id: 'small-bookshelf',
    category: 'home-lifestyle',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: woodenDesk,
    name: 'Small BookSelf',
    currentPrice: '$360',
    oldPrice: '$400',
    rating: 65,
    productImages: [],
  },
  {
    id: 'breed-dry-dog-food',
    category: 'groceries-pets',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: dogFood,
    name: 'Breed Dry Dog Food',
    currentPrice: '$100',
    oldPrice: '',
    rating: 300,
    productImages: [],
  },
  {
    id: 'canon-eos-dslr-camera',
    category: 'camera',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: camera,
    name: 'CANON EOS DSLR Camera',
    currentPrice: '$360',
    oldPrice: '',
    rating: 95,
    productImages: [],
  },
  {
    id: 'asus-fhd-gaming-laptop',
    category: 'computers',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: laptop,
    name: 'ASUS FHD Gaming Laptop',
    currentPrice: '$700',
    oldPrice: '',
    rating: 325,
    productImages: [],
  },
  {
    id: 'curology-product-set',
    category: 'health-beauty',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: toothPaste,
    name: 'Curology Product Set',
    currentPrice: '$500',
    oldPrice: '',
    rating: 145,
    productImages: [],
  },
  {
    id: 'kids-electric-car',
    category: 'babys-toys',
    hasBadge: true,
    badgeColor: 'green',
    discountPercent: '-40%',
    image: toyCar,
    name: 'Kids Electric Car',
    currentPrice: '$960',
    oldPrice: '',
    rating: 65,
    productImages: [],
  },
  {
    id: 'jr-zoom-soccer-cleats',
    category: 'sports-outdoor',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: boots,
    name: 'Jr. Zoom Soccer Cleats',
    currentPrice: '$1160',
    oldPrice: '',
    rating: 35,
    productImages: [],
  },
  {
    id: 'gp11-shooter-usb-gamepad',
    category: 'gaming',
    hasBadge: true,
    badgeColor: 'green',
    discountPercent: '-40%',
    image: gamePadBlack,
    name: 'GP11 Shooter USB Gamepad',
    currentPrice: '$660',
    oldPrice: '',
    rating: 55,
    colors: [
      { name: 'Black', value: '#1F1F1F', image: gamePadBlack },
      { name: 'White', value: '#FFFFFF', image: gamePadWhite },
    ],
    productImages: [],
  },
  {
    id: 'quilted-satin-jacket',
    category: 'mens-fashion',
    hasBadge: true,
    badgeColor: 'red',
    discountPercent: '-40%',
    image: greenJacket,
    name: 'Quilted Satin Jacket',
    currentPrice: '$660',
    oldPrice: '',
    rating: 55,
    colors: [
      { name: 'Green', value: '#6D8B5B', image: greenJacket },
      { name: 'Pink', value: '#F2C4CF', image: pinkJacket },
    ],
    productImages: [],
  },
]

export const featuredProduct = {
  id: 'iphone-14-series',
  category: 'phones',
  image: iphone,
  name: 'iPhone 14 Series',
  currentPrice: '$999',
  oldPrice: '',
  rating: 100,
  productImages: [iphone],
}

export const jblProduct = {
  id: 'jbl-boombox-3',
  category: 'electronics',
  image: jblImage,
  name: 'JBL Boombox 3 Portable Speaker',
  currentPrice: '$299',
  oldPrice: '$349',
  rating: 95,
  productImages: [jblImage],
}

const productCatalog = [...products, featuredProduct, jblProduct]

export function getProductById(id) {
  return productCatalog.find((product) => product.id === id)
}

export function getProductsByCategory(category) {
  return productCatalog.filter((product) => product.category === category)
}

export function searchProducts(query) {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return []
  }

  return productCatalog.filter((product) => {
    const name = product.name.toLowerCase()
    const category = product.category.replace(/-/g, ' ').toLowerCase()

    return name.includes(normalizedQuery) || category.includes(normalizedQuery)
  })
}

export default products
