import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
    Shield, AlertTriangle, CheckCircle, XCircle,
    ArrowLeft, BookOpen, RefreshCw, MessageCircle,
    Eye, Lock, UserX, Users, Info
} from 'lucide-react'
import { useApp } from '../context/AppContext'

function ScanResult() {
    const { scanResult } = useApp()
    const navigate = useNavigate()

    useEffect(() => {
        if (!scanResult) {
            navigate('/scanner')
        }
    }, [scanResult, navigate])

    if (!scanResult) {
        return null
    }

    const { url, score, riskLevel, analyses } = scanResult

    const getRiskStyles = () => {
        switch (riskLevel) {
            case 'SAFE':
                return { color: 'var(--safe-green)', bg: 'rgba(34, 197, 94, 0.1)', border: 'rgba(34, 197, 94, 0.3)' }
            case 'MEDIUM':
                return { color: 'var(--warning-yellow)', bg: 'rgba(234, 179, 8, 0.1)', border: 'rgba(234, 179, 8, 0.3)' }
            default:
                return { color: 'var(--danger-red)', bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.3)' }
        }
    }

    const styles = getRiskStyles()

    // Detect link source type
    const getLinkSource = () => {
        const lowerUrl = url.toLowerCase()
        if (lowerUrl.includes('whatsapp') || lowerUrl.includes('wa.me')) return 'WhatsApp'
        if (lowerUrl.includes('instagram') || lowerUrl.includes('ig.me')) return 'Instagram'
        if (lowerUrl.includes('bit.ly') || lowerUrl.includes('tinyurl') || lowerUrl.includes('t.co') || lowerUrl.includes('goo.gl')) return 'Shortened Link'
        if (lowerUrl.includes('facebook') || lowerUrl.includes('fb.me')) return 'Facebook'
        if (lowerUrl.includes('telegram') || lowerUrl.includes('t.me')) return 'Telegram'
        return 'Website/SMS'
    }

    const linkSource = getLinkSource()

    // What happens if you open this link
    const whatHappensSteps = [
        { icon: '🌐', text: 'A fake website opens that looks like a real company or app' },
        { icon: '📝', text: 'It asks for personal details like password, OTP, or bank info' },
        { icon: '🎭', text: 'Attackers pretend to be trusted sources to gain your trust' },
        { icon: '🔓', text: 'When you enter details, attackers steal them immediately' },
        { icon: '💸', text: 'Your accounts, money, or personal data may be stolen' }
    ]

    // Safety actions
    const safetyActions = [
        { icon: XCircle, text: 'Close the website immediately - do not explore further', color: 'var(--danger-red)' },
        { icon: Lock, text: 'Do NOT enter any personal information, passwords, or OTPs', color: 'var(--danger-red)' },
        { icon: Shield, text: 'Change your passwords if you already entered any details', color: 'var(--warning-yellow)' },
        { icon: CheckCircle, text: 'Enable two-step verification on all important accounts', color: 'var(--safe-green)' },
        { icon: Users, text: 'Warn friends and family not to open the same link', color: 'var(--accent-cyan)' }
    ]

    return (
        <div className="section">
            <div className="container" style={{ maxWidth: '700px' }}>
                {/* Back Button */}
                <Link
                    to="/scanner"
                    className="flex items-center gap-2 mb-6"
                    style={{ color: 'var(--text-muted)', fontSize: '14px' }}
                >
                    <ArrowLeft style={{ width: '16px', height: '16px' }} />
                    Scan Another Link
                </Link>

                {/* Result Header */}
                <div className="card mb-6" style={{
                    padding: '32px',
                    textAlign: 'center',
                    background: styles.bg,
                    borderColor: styles.border
                }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: styles.bg,
                        border: `3px solid ${styles.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                    }}>
                        {riskLevel === 'SAFE' ? (
                            <CheckCircle style={{ width: '40px', height: '40px', color: styles.color }} />
                        ) : riskLevel === 'MEDIUM' ? (
                            <AlertTriangle style={{ width: '40px', height: '40px', color: styles.color }} />
                        ) : (
                            <XCircle style={{ width: '40px', height: '40px', color: styles.color }} />
                        )}
                    </div>

                    <div className="badge mb-4" style={{
                        background: styles.bg,
                        color: styles.color,
                        border: `1px solid ${styles.border}`,
                        fontSize: '14px',
                        padding: '6px 16px'
                    }}>
                        {riskLevel} RISK
                    </div>

                    <h1 className="text-title mb-3">Security Score: {score}/100</h1>

                    <p style={{
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        wordBreak: 'break-all',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        {url}
                    </p>
                </div>

                {/* SECTION 1: Link Source Awareness */}
                {riskLevel !== 'SAFE' && (
                    <div className="card mb-6" style={{
                        padding: '20px 24px',
                        background: 'rgba(245, 158, 11, 0.08)',
                        borderColor: 'rgba(245, 158, 11, 0.25)'
                    }}>
                        <div className="flex items-center gap-3">
                            <MessageCircle style={{ width: '20px', height: '20px', color: '#f59e0b', flexShrink: 0 }} />
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
                                ⚠️ This type of link is commonly shared in <strong style={{ color: '#f59e0b' }}>{linkSource}</strong> scams.
                                Be very careful before clicking or entering any information.
                            </p>
                        </div>
                    </div>
                )}

                {/* Score Bar */}
                <div className="card mb-6" style={{ padding: '24px' }}>
                    <div className="flex items-center justify-between mb-3">
                        <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                            Security Score
                        </span>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: styles.color }}>
                            {score}%
                        </span>
                    </div>
                    <div style={{
                        height: '12px',
                        background: 'var(--bg-elevated)',
                        borderRadius: '6px',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            height: '100%',
                            width: `${score}%`,
                            background: styles.color,
                            borderRadius: '6px',
                            transition: 'width 1s ease'
                        }} />
                    </div>
                </div>

                {/* Detailed Analysis */}
                <div className="card mb-6" style={{ padding: '24px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-primary)' }}>
                        Detailed Analysis
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {analyses.map((analysis, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: '16px',
                                    background: analysis.status === 'pass'
                                        ? 'rgba(34, 197, 94, 0.05)'
                                        : analysis.status === 'warning'
                                            ? 'rgba(234, 179, 8, 0.05)'
                                            : 'rgba(239, 68, 68, 0.05)',
                                    borderRadius: '10px',
                                    borderLeft: `3px solid ${analysis.status === 'pass' ? 'var(--safe-green)' :
                                        analysis.status === 'warning' ? 'var(--warning-yellow)' : 'var(--danger-red)'
                                        }`
                                }}
                            >
                                <div className="flex items-start gap-3">
                                    <div style={{ marginTop: '2px' }}>
                                        {analysis.status === 'pass' ? (
                                            <CheckCircle style={{ width: '18px', height: '18px', color: 'var(--safe-green)' }} />
                                        ) : analysis.status === 'warning' ? (
                                            <AlertTriangle style={{ width: '18px', height: '18px', color: 'var(--warning-yellow)' }} />
                                        ) : (
                                            <XCircle style={{ width: '18px', height: '18px', color: 'var(--danger-red)' }} />
                                        )}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{
                                            fontSize: '15px',
                                            fontWeight: '600',
                                            marginBottom: '4px',
                                            color: 'var(--text-primary)'
                                        }}>
                                            {analysis.name}
                                        </h3>
                                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                            {analysis.message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECTION 2: What Happens If You Open This Link */}
                {riskLevel !== 'SAFE' && (
                    <div className="card mb-6" style={{ padding: '24px' }}>
                        <div className="flex items-center gap-3 mb-4">
                            <Eye style={{ width: '20px', height: '20px', color: 'var(--danger-red)' }} />
                            <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: 'var(--text-primary)' }}>
                                What Happens If You Open This Link?
                            </h2>
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.6' }}>
                            Here's what typically happens when someone opens a suspicious link like this:
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {whatHappensSteps.map((step, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3"
                                    style={{
                                        padding: '12px 16px',
                                        background: 'rgba(239, 68, 68, 0.05)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <span style={{ fontSize: '18px' }}>{step.icon}</span>
                                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                                        <strong style={{ color: 'var(--text-primary)' }}>Step {i + 1}:</strong> {step.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* SECTION 3: What Should You Do Now */}
                {riskLevel !== 'SAFE' && (
                    <div className="card mb-6" style={{
                        padding: '24px',
                        background: 'rgba(34, 197, 94, 0.05)',
                        borderColor: 'rgba(34, 197, 94, 0.2)'
                    }}>
                        <div className="flex items-center gap-3 mb-4">
                            <Shield style={{ width: '20px', height: '20px', color: 'var(--safe-green)' }} />
                            <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: 'var(--text-primary)' }}>
                                What Should You Do Now?
                            </h2>
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.6' }}>
                            Follow these safety steps to protect yourself:
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {safetyActions.map((action, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3"
                                    style={{
                                        padding: '14px 16px',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        borderRadius: '8px',
                                        borderLeft: `3px solid ${action.color}`
                                    }}
                                >
                                    <action.icon style={{ width: '18px', height: '18px', color: action.color, flexShrink: 0 }} />
                                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                                        {action.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* SECTION 4: Awareness Message */}
                {riskLevel !== 'SAFE' && (
                    <div className="card mb-6" style={{
                        padding: '20px 24px',
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                        borderColor: 'rgba(6, 182, 212, 0.2)'
                    }}>
                        <div className="flex items-start gap-3">
                            <Info style={{ width: '20px', height: '20px', color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--accent-cyan)', marginBottom: '8px' }}>
                                    💡 Did You Know?
                                </h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                                    Attackers use <strong>fear</strong> ("Your account is blocked!"), <strong>offers</strong> ("You won a prize!"),
                                    or <strong>urgency</strong> ("Act now!") to trick people into clicking fake links.
                                    Always stay calm and verify before clicking.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Learn More */}
                {riskLevel !== 'SAFE' && (
                    <div className="card mb-6" style={{
                        padding: '24px',
                        background: 'rgba(6, 182, 212, 0.05)',
                        borderColor: 'rgba(6, 182, 212, 0.2)'
                    }}>
                        <div className="flex items-center gap-3 mb-3">
                            <BookOpen style={{ width: '20px', height: '20px', color: 'var(--accent-cyan)' }} />
                            <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0, color: 'var(--text-primary)' }}>
                                Learn More About Phishing
                            </h3>
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.6' }}>
                            Understand how phishing attacks work and how to protect yourself in the future.
                        </p>
                        <Link to="/cyber-attacks/phishing" className="btn btn-primary">
                            <span className="btn-content">
                                <Shield style={{ width: '16px', height: '16px' }} />
                                <span>Learn About Phishing</span>
                            </span>
                        </Link>
                    </div>
                )}

                {/* Safe Result Message */}
                {riskLevel === 'SAFE' && (
                    <div className="card mb-6" style={{
                        padding: '24px',
                        background: 'rgba(34, 197, 94, 0.05)',
                        borderColor: 'rgba(34, 197, 94, 0.2)'
                    }}>
                        <div className="flex items-center gap-3 mb-3">
                            <CheckCircle style={{ width: '20px', height: '20px', color: 'var(--safe-green)' }} />
                            <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0, color: 'var(--text-primary)' }}>
                                This Link Appears Safe
                            </h3>
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Our analysis didn't find obvious red flags with this link. However, always stay cautious
                            and avoid entering sensitive information unless you're 100% sure of the website's authenticity.
                        </p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-4" style={{ flexWrap: 'wrap' }}>
                    <Link to="/scanner" className="btn btn-secondary">
                        <span className="btn-content">
                            <RefreshCw style={{ width: '16px', height: '16px' }} />
                            <span>Scan Another Link</span>
                        </span>
                    </Link>
                    <Link to="/safety-tips" className="btn btn-primary">
                        <span className="btn-content">
                            <Shield style={{ width: '16px', height: '16px' }} />
                            <span>View Safety Tips</span>
                        </span>
                    </Link>
                </div>

                {/* Disclaimer */}
                <div style={{
                    marginTop: '24px',
                    padding: '16px',
                    background: 'rgba(100, 116, 139, 0.1)',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                        ⚠️ <strong>Disclaimer:</strong> PhishGuard provides educational analysis only.
                        This is not a guarantee of safety. Always use your own judgment when clicking unknown links.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ScanResult
