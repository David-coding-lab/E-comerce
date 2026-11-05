import { useCallback, useEffect, useMemo, useState } from 'react'
import { CartActionsContext, CartContext } from './cartContext'
import { parsePrice } from '../utils/price'

const STORAGE_KEY = 'exclusive-cart'

function getItemKey(product, size) {
  return `${product.id}::${size ?? 'default'}`
}

function readStoredItems() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? JSON.parse(stored) : []

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredItems)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Ignore storage errors (private mode, quota, etc.)
    }
  }, [items])

  const addItem = useCallback((product, quantity = 1, size = null) => {
    const key = getItemKey(product, size)
    const safeQuantity = Math.max(1, quantity)

    setItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.key === key)

      if (existingItem) {
        return previousItems.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item,
        )
      }

      return [
        ...previousItems,
        { key, product, quantity: safeQuantity, size },
      ]
    })
  }, [])

  const removeItem = useCallback((key) => {
    setItems((previousItems) =>
      previousItems.filter((item) => item.key !== key),
    )
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    setItems((previousItems) =>
      previousItems.map((item) =>
        item.key === key
          ? { ...item, quantity: Math.max(1, quantity) }
          : item,
      ),
    )
  }, [])

  const updateSize = useCallback((key, size) => {
    setItems((previousItems) => {
      const item = previousItems.find((entry) => entry.key === key)

      if (!item) {
        return previousItems
      }

      const nextKey = getItemKey(item.product, size)

      if (nextKey === key) {
        return previousItems
      }

      const conflictingItem = previousItems.find(
        (entry) => entry.key === nextKey,
      )

      if (conflictingItem) {
        return previousItems
          .filter((entry) => entry.key !== key && entry.key !== nextKey)
          .concat({
            ...conflictingItem,
            quantity: conflictingItem.quantity + item.quantity,
          })
      }

      return previousItems.map((entry) =>
        entry.key === key ? { ...entry, key: nextKey, size } : entry,
      )
    })
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const actions = useMemo(
    () => ({
      addItem,
      removeItem,
      updateQuantity,
      updateSize,
      clearCart,
    }),
    [addItem, removeItem, updateQuantity, updateSize, clearCart],
  )

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) =>
        total + parsePrice(item.product.currentPrice) * item.quantity,
      0,
    )

    return {
      items,
      ...actions,
      itemCount,
      subtotal,
    }
  }, [items, actions])

  return (
    <CartActionsContext.Provider value={actions}>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </CartActionsContext.Provider>
  )
}

export default CartProvider
