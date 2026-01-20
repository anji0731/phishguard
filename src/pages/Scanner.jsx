import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Shield, AlertTriangle, CheckCircle, Clock, History, MessageCircle, Instagram, Smartphone, Link2, Info } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { scanUrl, isValidUrl } from '../utils/scannerLogic'

function Scanner() {
    const [url, setUrl] = useState('')
    const [error, setError] = useState('')
    const { isScanning, setIsScanning, setScanResult, scanHistory } = useApp()
    const navigate = useNavigate()

    const handleScan = async (e) => {
        e.preventDefault()
        setError('')

        if (!url.trim()) {
            setError('Please enter a URL to scan')
            return
        }

        if (!isValidUrl(url)) {
            setError('Please enter a valid URL (e.g., example.com or https://example.com)')
            return
        }

        setIsScanning(true)

        await new Promise(resolve => setTimeout(resolve, 2500))

        const result = scanUrl(url)
        setScanResult(result)
        setIsScanning(false)
        navigate('/scan-result')
    }

    const exampleUrls = [
        { url: 'https://google.com', label: 'Safe Site', safe: true },
        { url: 'http://amaz0n-login.xyz', label: 'Suspicious', safe: false },
        { url: 'https://bit.ly/fake-offer', label: 'Short Link', safe: false }
    ]

    const linkTypes = [
        { icon: Link2, text: 'Website Links' },
        { icon: MessageCircle, text: 'WhatsApp Links' },
        { icon: Instagram, text: 'Instagram Links' },
        { icon: Smartphone, text: 'SMS Links' }
    ]

    return (
        <div className="section">
            <div className="container" style={{ maxWidth: '700px' }}>
                {/* Header */}
                <div className="text-center mb-8">
                    <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px'
                    }}>
                        <Search style={{ width: '32px', height: '32px', color: 'white' }} />
                    </div>
                    <h1 className="text-title mb-4">URL & Link Scanner</h1>
                    <p className="text-secondary" style={{ maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
                        Paste any suspicious link from websites, WhatsApp, Instagram, SMS, or social media to check if it's safe.
                    </p>
                </div>

                {/* Link Types Supported */}
                <div className="card mb-6" style={{
                    padding: '20px 24px',
                    background: 'rgba(6, 182, 212, 0.05)',
                    borderColor: 'rgba(6, 182, 212, 0.2)'
                }}>
                    <div className="flex items-center gap-2 mb-3">
                        <Info style={{ width: '16px', height: '16px', color: 'var(--accent-cyan)' }} />
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                            Works for all link types:
                        </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        {linkTypes.map((item, i) => (
                            <div key={i} className="flex items-center gap-2" style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                <item.icon style={{ width: '16px', height: '16px', color: 'var(--accent-cyan)' }} />
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scanner Form */}
                <div className="card" style={{ padding: '32px' }}>
                    <form onSubmit={handleScan}>
                        <div className="mb-6">
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: 'var(--text-primary)' }}>
                                Paste Suspicious Link
                            </label>
                            <input
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Paste any link from WhatsApp, SMS, Instagram, or website..."
                                className="input"
                                disabled={isScanning}
                            />
                            {error && (
                                <p style={{ marginTop: '8px', fontSize: '14px', color: 'var(--danger-red)' }}>
                                    {error}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg w-full"
                            style={{ justifyContent: 'center' }}
                            disabled={isScanning}
                        >
                            {isScanning ? (
                                <span className="btn-content">
                                    <div style={{
                                        width: '18px',
                                        height: '18px',
                                        border: '2px solid transparent',
                                        borderTop: '2px solid currentColor',
                                        borderRadius: '50%',
                                        animation: 'spin 1s linear infinite'
                                    }} />
                                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                                    <span>Scanning...</span>
                                </span>
                            ) : (
                                <span className="btn-content">
                                    <Shield style={{ width: '18px', height: '18px' }} />
                                    <span>Check if Link is Safe</span>
                                </span>
                            )}
                        </button>
                    </form>

                    {/* Scanning Animation */}
                    {isScanning && (
                        <div style={{ marginTop: '32px', textAlign: 'center' }}>
                            <div className="card" style={{
                                padding: '24px',
                                background: 'var(--bg-elevated)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '3px',
                                    background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)',
                                    animation: 'scanLine 1.5s ease-in-out infinite'
                                }} />
                                <style>{`
                                    @keyframes scanLine {
                                        0%, 100% { transform: translateX(-100%); }
                                        50% { transform: translateX(100%); }
                                    }
                                `}</style>
                                <Shield style={{ width: '40px', height: '40px', color: 'var(--accent-cyan)', margin: '0 auto 16px' }} />
                                <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '8px' }}>
                                    Analyzing Link...
                                </h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                                    Checking for phishing, scams, and suspicious patterns
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Security Checks Info */}
                    {!isScanning && (
                        <div style={{ marginTop: '28px' }}>
                            <p style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-muted)', marginBottom: '12px' }}>
                                What we check:
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                                {[
                                    { icon: AlertTriangle, text: 'Suspicious Patterns' },
                                    { icon: Clock, text: 'Domain Age' },
                                    { icon: Shield, text: 'HTTPS/SSL' },
                                    { icon: CheckCircle, text: 'Brand Impersonation' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                                        <item.icon style={{ width: '14px', height: '14px', color: 'var(--accent-cyan)' }} />
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Example URLs */}
                <div className="card mt-6" style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>
                        Try Example Links
                    </h3>
                    <div className="flex gap-3" style={{ flexWrap: 'wrap' }}>
                        {exampleUrls.map((example, i) => (
                            <button
                                key={i}
                                onClick={() => setUrl(example.url)}
                                style={{
                                    padding: '10px 16px',
                                    background: example.safe ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                    border: `1px solid ${example.safe ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                                    borderRadius: '8px',
                                    fontSize: '13px',
                                    color: example.safe ? 'var(--safe-green)' : 'var(--danger-red)',
                                    cursor: 'pointer',
                                    fontWeight: '500'
                                }}
                            >
                                {example.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Scan History */}
                {scanHistory.length > 0 && (
                    <div className="card mt-6" style={{ padding: '24px' }}>
                        <div className="flex items-center gap-2 mb-4">
                            <History style={{ width: '18px', height: '18px', color: 'var(--text-muted)' }} />
                            <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
                                Recent Scans
                            </h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {scanHistory.slice(0, 5).map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => setUrl(item.url)}
                                    style={{
                                        padding: '12px 16px',
                                        background: 'var(--bg-elevated)',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                                        {item.url.length > 40 ? `${item.url.slice(0, 40)}...` : item.url}
                                    </span>
                                    <span className={`badge ${item.riskLevel === 'SAFE' ? 'badge-safe' :
                                        item.riskLevel === 'MEDIUM' ? 'badge-warning' : 'badge-danger'
                                        }`} style={{ fontSize: '10px' }}>
                                        {item.riskLevel}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Disclaimer */}
                <div style={{
                    marginTop: '24px',
                    padding: '16px',
                    background: 'rgba(100, 116, 139, 0.1)',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                        ⚠️ <strong>Disclaimer:</strong> PhishGuard does not monitor WhatsApp, Instagram, or SMS messages.
                        Users voluntarily paste links here for safety analysis.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Scanner
