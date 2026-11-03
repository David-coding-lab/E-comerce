export const categories = [
  { label: 'Woman’s Fashion', slug: 'womans-fashion', hasChildren: true },
  { label: 'Men’s Fashion', slug: 'mens-fashion', hasChildren: true },
  { label: 'Electronics', slug: 'electronics', hasChildren: false },
  { label: 'Home & Lifestyle', slug: 'home-lifestyle', hasChildren: false },
  { label: 'Medicine', slug: 'medicine', hasChildren: false },
  { label: 'Sports & Outdoor', slug: 'sports-outdoor', hasChildren: false },
  { label: 'Baby’s & Toys', slug: 'babys-toys', hasChildren: false },
  { label: 'Groceries & Pets', slug: 'groceries-pets', hasChildren: false },
  { label: 'Health & Beauty', slug: 'health-beauty', hasChildren: false },
]

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug)
}

export function slugToTitle(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default categories
