import React, { useEffect, useMemo, useState } from 'react'
import { ConnectivityContext } from './connectivity.js'

export function ConnectivityProvider({ children }) {
  const [isOnline, setIsOnline] = useState(() => navigator.onLine)
  const [connectionChecked, setConnectionChecked] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      setConnectionChecked(true)
    }
    const handleOffline = () => {
      setIsOnline(false)
      setConnectionChecked(true)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    setConnectionChecked(true)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const value = useMemo(() => ({ isOnline, connectionChecked }), [isOnline, connectionChecked])

  return <ConnectivityContext.Provider value={value}>{children}</ConnectivityContext.Provider>
}

