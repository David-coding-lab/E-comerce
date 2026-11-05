import { createContext, useContext } from 'react'

export const CartContext = createContext(null)
export const CartActionsContext = createContext(null)

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

export function useCartActions() {
  const context = useContext(CartActionsContext)

  if (!context) {
    throw new Error('useCartActions must be used within a CartProvider')
  }

  return context
}
