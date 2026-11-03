import { createContext, useContext } from 'react'

export const ProductViewContext = createContext(null)

export function useProductView() {
  const context = useContext(ProductViewContext)

  if (!context) {
    throw new Error('useProductView must be used within a ProductViewProvider')
  }

  return context
}
