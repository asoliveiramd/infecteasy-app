const CACHE_NAME = 'infecteasy-static-v1'
const APP_SHELL = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.webmanifest',
  '/infecteasy-icon.svg',
]

const isSameOrigin = (requestUrl) => requestUrl.origin === self.location.origin

const isStaticAsset = (request) => {
  if (request.method !== 'GET') return false
  const url = new URL(request.url)
  if (!isSameOrigin(url)) return false
  return request.destination === 'document'
    || request.destination === 'script'
    || request.destination === 'style'
    || request.destination === 'font'
    || request.destination === 'image'
    || url.pathname.startsWith('/assets/')
    || url.pathname === '/manifest.webmanifest'
}

const isSensitiveOrDynamicRequest = (request) => {
  const url = new URL(request.url)
  return url.hostname.endsWith('.supabase.co')
    || url.pathname.startsWith('/rest/')
    || url.pathname.startsWith('/auth/')
    || url.pathname.startsWith('/functions/')
}

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names
        .filter((name) => name.startsWith('infecteasy-static-') && name !== CACHE_NAME)
        .map((name) => caches.delete(name))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event

  if (isSensitiveOrDynamicRequest(request)) {
    event.respondWith(fetch(request))
    return
  }

  if (!isStaticAsset(request)) return

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then((response) => {
        const copy = response.clone()
        event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put('/index.html', copy)))
        return response
      }).catch(() => caches.match('/index.html').then((response) => response || caches.match('/offline.html'))),
    )
    return
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse
      return fetch(request).then((response) => {
        if (response.ok && isSameOrigin(new URL(request.url))) {
          const copy = response.clone()
          event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)))
        }
        return response
      })
    }),
  )
})
