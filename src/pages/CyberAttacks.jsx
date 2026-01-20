import { Link } from 'react-router-dom'
import { BookOpen, Shield, AlertTriangle, Search, ChevronRight } from 'lucide-react'
import { cyberAttacks } from '../data/cyberAttacks'

function CyberAttacks() {
    const highSeverity = cyberAttacks.filter(a => a.severity === 'high')
    const mediumSeverity = cyberAttacks.filter(a => a.severity === 'medium')

    return (
        <div className="section">
            <div className="container container-narrow">
                {/* Header */}
                <div className="text-center mb-12">
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px'
                        }}
                    >
                        <BookOpen style={{ width: '32px', height: '32px', color: 'white' }} />
                    </div>
                    <h1 className="text-title mb-4">Cyber Attacks Explained</h1>
                    <p className="text-secondary" style={{ maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
                        Learn about the most common cyber attacks in <strong style={{ color: 'var(--text-primary)' }}>simple words</strong>.
                        Written so that even a student can understand!
                    </p>
                </div>

                {/* Info Banner */}
                <div className="card mb-8" style={{
                    background: 'rgba(6, 182, 212, 0.05)',
                    borderColor: 'rgba(6, 182, 212, 0.2)'
                }}>
                    <div className="flex items-center gap-4" style={{ flexWrap: 'wrap' }}>
                        <div
                            style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'rgba(6, 182, 212, 0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                        >
                            <Shield style={{ width: '24px', height: '24px', color: 'var(--accent-cyan)' }} />
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                            <h3 className="text-card-title mb-1">Why Learn About Cyber Attacks?</h3>
                            <p className="text-muted text-small" style={{ margin: 0 }}>
                                Understanding how attackers think helps you protect yourself.
                            </p>
                        </div>
                        <Link to="/scanner" className="btn btn-primary">
                            <span className="btn-content">
                                <Search style={{ width: '16px', height: '16px' }} />
                                <span>Scan a Website</span>
                            </span>
                        </Link>
                    </div>
                </div>

                {/* High Severity Attacks */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle style={{ width: '22px', height: '22px', color: 'var(--danger-red)' }} />
                        <h2 className="text-subtitle" style={{ margin: 0 }}>High Risk Attacks</h2>
                        <span className="badge badge-danger">Most Dangerous</span>
                    </div>
                    <div className="grid-2">
                        {highSeverity.map((attack) => (
                            <AttackCard key={attack.id} attack={attack} />
                        ))}
                    </div>
                </section>

                {/* Medium Severity Attacks */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle style={{ width: '22px', height: '22px', color: 'var(--warning-yellow)' }} />
                        <h2 className="text-subtitle" style={{ margin: 0 }}>Medium Risk Attacks</h2>
                        <span className="badge badge-warning">Be Cautious</span>
                    </div>
                    <div className="grid-2">
                        {mediumSeverity.map((attack) => (
                            <AttackCard key={attack.id} attack={attack} />
                        ))}
                    </div>
                </section>

                {/* Quick Reference */}
                <div className="card" style={{ padding: '32px' }}>
                    <h2 className="text-subtitle text-center mb-8">Quick Safety Reference</h2>
                    <div className="grid-3">
                        {[
                            { emoji: '🔒', title: 'Check HTTPS', desc: 'Always look for the padlock icon before entering passwords' },
                            { emoji: '🔍', title: 'Verify URLs', desc: 'Check website addresses carefully for misspellings' },
                            { emoji: '🛡️', title: 'Use 2FA', desc: 'Enable two-factor authentication on all important accounts' }
                        ].map((tip, i) => (
                            <div key={i} className="text-center">
                                <div
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: 'var(--bg-elevated)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 16px',
                                        fontSize: '24px'
                                    }}
                                >
                                    {tip.emoji}
                                </div>
                                <h3 className="text-card-title mb-2">{tip.title}</h3>
                                <p className="text-muted text-small" style={{ lineHeight: '1.5' }}>{tip.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted mb-4">Want to check if a website is safe?</p>
                    <Link to="/scanner" className="btn btn-primary btn-lg">
                        <span className="btn-content">
                            <Shield style={{ width: '18px', height: '18px' }} />
                            <span>Use Our Scanner</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function AttackCard({ attack }) {
    const { id, name, icon: Icon, shortDescription, severity, color } = attack

    return (
        <Link
            to={`/cyber-attacks/${id}`}
            className="card card-interactive"
            style={{ display: 'block' }}
        >
            <div className="flex items-start gap-4">
                <div
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `${color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}
                >
                    <Icon style={{ width: '24px', height: '24px', color }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-card-title" style={{ margin: 0, color: 'var(--text-primary)' }}>
                            {name}
                        </h3>
                        <span className={`badge ${severity === 'high' ? 'badge-danger' : 'badge-warning'}`} style={{ flexShrink: 0 }}>
                            {severity}
                        </span>
                    </div>
                    <p className="text-muted text-small mb-4" style={{ lineHeight: '1.6' }}>
                        {shortDescription}
                    </p>
                    <div className="flex items-center gap-1" style={{ color: 'var(--accent-cyan)', fontSize: '14px', fontWeight: '500' }}>
                        Learn More
                        <ChevronRight style={{ width: '16px', height: '16px' }} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CyberAttacks
