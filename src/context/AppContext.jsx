import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [scanResult, setScanResult] = useState(null)
    const [isScanning, setIsScanning] = useState(false)
    const [scanHistory, setScanHistory] = useState([])

    const addToHistory = (result) => {
        setScanHistory(prev => [result, ...prev].slice(0, 10))
    }

    const clearHistory = () => {
        setScanHistory([])
    }

    const value = {
        scanResult,
        setScanResult,
        isScanning,
        setIsScanning,
        scanHistory,
        addToHistory,
        clearHistory
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useApp must be used within an AppProvider')
    }
    return context
}
