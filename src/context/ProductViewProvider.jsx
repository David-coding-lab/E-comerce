import { useCallback, useMemo, useState } from 'react'
import {
  ActiveProductContext,
  ProductActionsContext,
} from './productViewContext'

export function ProductViewProvider({ children }) {
  const [activeProduct, setActiveProduct] = useState(null)

  const openProduct = useCallback((product) => setActiveProduct(product), [])
  const closeProduct = useCallback(() => setActiveProduct(null), [])

  const actions = useMemo(
    () => ({ openProduct, closeProduct }),
    [openProduct, closeProduct],
  )

  return (
    <ProductActionsContext.Provider value={actions}>
      <ActiveProductContext.Provider value={activeProduct}>
        {children}
      </ActiveProductContext.Provider>
    </ProductActionsContext.Provider>
  )
}

export default ProductViewProvider
