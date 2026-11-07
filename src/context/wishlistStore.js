const STORAGE_KEY = 'velora-wishlist'

function readStoredItems() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? JSON.parse(stored) : []

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

let items = readStoredItems()
const listeners = new Set()
const itemListeners = new Map()

function persist() {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Ignore storage errors (private mode, quota, etc.)
  }
}

function notify(productIds) {
  listeners.forEach((listener) => listener())

  productIds.forEach((productId) => {
    itemListeners.get(productId)?.forEach((listener) => listener())
  })
}

export const wishlistStore = {
  getItems: () => items,
  getCount: () => items.length,
  isWishlisted: (productId) =>
    items.some((item) => item.id === productId),
  subscribe: (listener) => {
    listeners.add(listener)

    return () => listeners.delete(listener)
  },
  subscribeItem: (productId, listener) => {
    if (!itemListeners.has(productId)) {
      itemListeners.set(productId, new Set())
    }

    const productListeners = itemListeners.get(productId)
    productListeners.add(listener)

    return () => {
      productListeners.delete(listener)

      if (productListeners.size === 0) {
        itemListeners.delete(productId)
      }
    }
  },
  toggleItem: (product) => {
    const isSaved = items.some((item) => item.id === product.id)

    items = isSaved
      ? items.filter((item) => item.id !== product.id)
      : [...items, product]

    persist()
    notify([product.id])
  },
  removeItem: (productId) => {
    if (!items.some((item) => item.id === productId)) {
      return
    }

    items = items.filter((item) => item.id !== productId)
    persist()
    notify([productId])
  },
  clear: () => {
    const previousProductIds = items.map((item) => item.id)

    items = []
    persist()
    notify(previousProductIds)
  },
}
