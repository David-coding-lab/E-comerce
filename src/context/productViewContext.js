import { createContext, useContext } from 'react'

export const ProductActionsContext = createContext(null)
export const ActiveProductContext = createContext(undefined)

export function useProductActions() {
  const context = useContext(ProductActionsContext)

  if (!context) {
    throw new Error('useProductActions must be used within a ProductViewProvider')
  }

  return context
}

export function useActiveProduct() {
  const context = useContext(ActiveProductContext)

  if (context === undefined) {
    throw new Error('useActiveProduct must be used within a ProductViewProvider')
  }

  return context
}
