const LAST_ORDER_KEY = 'velora-last-order'

export function saveLastOrder(order) {
  try {
    window.sessionStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order))
  } catch {
    // Ignore storage errors (private mode, quota, etc.)
  }
}

export function readLastOrder() {
  try {
    const stored = window.sessionStorage.getItem(LAST_ORDER_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}
