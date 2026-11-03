import { products } from '../data/products'
import ProductListing from '../components/common/ProductListing'

function ExploreProductsPage() {
  return (
    <ProductListing
      badgeText='Our Products'
      title='Explore Our Products'
      products={products}
    />
  )
}

export default ExploreProductsPage
