import ProductListing from '../components/common/ProductListing'
import { useWishlist } from '../context/wishlistContext'

function Wishlist() {
  const { items } = useWishlist()

  return (
    <ProductListing
      title='My Wishlist'
      products={items}
      showNewArrival={false}
      emptyTitle='Your wishlist is empty'
      emptyDescription='Tap the heart on any product to save it here.'
    />
  )
}

export default Wishlist
