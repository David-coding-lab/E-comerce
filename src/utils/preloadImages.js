const preloadedSources = new Set()

export function preloadImages(sources = []) {
  sources.forEach((src) => {
    if (!src || preloadedSources.has(src)) {
      return
    }

    preloadedSources.add(src)
    const image = new window.Image()
    image.src = src
  })
}
