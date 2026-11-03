import { useCallback, useMemo, useState } from 'react'
import { ProductViewContext } from './productViewContext'

export function ProductViewProvider({ children }) {
  const [activeProduct, setActiveProduct] = useState(null)

  const openProduct = useCallback((product) => setActiveProduct(product), [])
  const closeProduct = useCallback(() => setActiveProduct(null), [])

  const value = useMemo(
    () => ({ activeProduct, openProduct, closeProduct }),
    [activeProduct, openProduct, closeProduct],
  )

  return <ProductViewContext.Provider value={value}>{children}</ProductViewContext.Provider>
}

export default ProductViewProvider
