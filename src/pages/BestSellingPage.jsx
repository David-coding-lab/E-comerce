import { products } from '../data/products'
import ProductListing from '../components/common/ProductListing'

function BestSellingPage() {
  return (
    <ProductListing
      badgeText='This Month'
      title='Best Selling Products'
      products={products}
    />
  )
}

export default BestSellingPage
