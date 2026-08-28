import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConnectivityProvider } from './contexts/ConnectivityContext.jsx'

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // A aplicação continua normalmente online caso o registro não esteja disponível.
    })
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConnectivityProvider>
      <App />
    </ConnectivityProvider>
  </StrictMode>,
)
