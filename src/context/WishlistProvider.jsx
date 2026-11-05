import { useCallback, useEffect, useMemo, useState } from 'react'
import { WishlistContext } from './wishlistContext'

const STORAGE_KEY = 'exclusive-wishlist'

function readStoredItems() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? JSON.parse(stored) : []

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(readStoredItems)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Ignore storage errors (private mode, quota, etc.)
    }
  }, [items])

  const toggleItem = useCallback((product) => {
    setItems((previousItems) => {
      const isSaved = previousItems.some((item) => item.id === product.id)

      if (isSaved) {
        return previousItems.filter((item) => item.id !== product.id)
      }

      return [...previousItems, product]
    })
  }, [])

  const removeItem = useCallback((productId) => {
    setItems((previousItems) =>
      previousItems.filter((item) => item.id !== productId),
    )
  }, [])

  const clearWishlist = useCallback(() => setItems([]), [])

  const value = useMemo(
    () => ({
      items,
      itemCount: items.length,
      toggleItem,
      removeItem,
      clearWishlist,
      isWishlisted: (productId) =>
        items.some((item) => item.id === productId),
    }),
    [items, toggleItem, removeItem, clearWishlist],
  )

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider
