import { createContext, useContext } from 'react'

export const ConnectivityContext = createContext({
  isOnline: true,
  connectionChecked: false,
})

export const useConnectivity = () => useContext(ConnectivityContext)
