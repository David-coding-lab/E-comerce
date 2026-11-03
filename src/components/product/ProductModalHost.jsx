import { useActiveProduct } from '../../context/productViewContext'
import ProductModal from './ProductModal'

function ProductModalHost() {
  const activeProduct = useActiveProduct()

  if (!activeProduct) {
    return null
  }

  return <ProductModal key={activeProduct.id} product={activeProduct} />
}

export default ProductModalHost
