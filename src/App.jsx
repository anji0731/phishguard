import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Scanner from './pages/Scanner'
import ScanResult from './pages/ScanResult'
import CyberAttacks from './pages/CyberAttacks'
import AttackDetail from './pages/AttackDetail'
import SafetyTips from './pages/SafetyTips'
import CyberCrimeHelp from './pages/CyberCrimeHelp'
import About from './pages/About'
import Disclaimer from './pages/Disclaimer'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="scanner" element={<Scanner />} />
                <Route path="scan-result" element={<ScanResult />} />
                <Route path="cyber-attacks" element={<CyberAttacks />} />
                <Route path="cyber-attacks/:attackId" element={<AttackDetail />} />
                <Route path="safety-tips" element={<SafetyTips />} />
                <Route path="cyber-crime-help" element={<CyberCrimeHelp />} />
                <Route path="about" element={<About />} />
                <Route path="disclaimer" element={<Disclaimer />} />
            </Route>
        </Routes>
    )
}

export default App
