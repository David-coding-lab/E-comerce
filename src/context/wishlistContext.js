import { useCallback, useMemo, useSyncExternalStore } from 'react'
import { wishlistStore } from './wishlistStore'

const wishlistActions = {
  toggleItem: wishlistStore.toggleItem,
  removeItem: wishlistStore.removeItem,
  clearWishlist: wishlistStore.clear,
}

export function useWishlistItems() {
  return useSyncExternalStore(
    wishlistStore.subscribe,
    wishlistStore.getItems,
  )
}

export function useWishlistCount() {
  return useSyncExternalStore(
    wishlistStore.subscribe,
    wishlistStore.getCount,
  )
}

export function useWishlistItem(productId) {
  const subscribe = useCallback(
    (listener) => wishlistStore.subscribeItem(productId, listener),
    [productId],
  )
  const getSnapshot = useCallback(
    () => wishlistStore.isWishlisted(productId),
    [productId],
  )

  return useSyncExternalStore(subscribe, getSnapshot)
}

export function useWishlistActions() {
  return wishlistActions
}

export function useWishlist() {
  const items = useWishlistItems()

  return useMemo(
    () => ({
      items,
      itemCount: items.length,
      ...wishlistActions,
      isWishlisted: wishlistStore.isWishlisted,
    }),
    [items],
  )
}
