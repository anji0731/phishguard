import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
    ArrowLeft, ChevronRight, AlertTriangle, Shield,
    CheckCircle, BookOpen, Play
} from 'lucide-react'
import { getAttackById, getRelatedAttacks } from '../data/cyberAttacks'

function AttackDetail() {
    const { attackId } = useParams()
    const navigate = useNavigate()
    const attack = getAttackById(attackId)
    const relatedAttacks = getRelatedAttacks(attackId)

    useEffect(() => {
        if (!attack) {
            navigate('/cyber-attacks')
        }
        window.scrollTo(0, 0)
    }, [attack, navigate, attackId])

    if (!attack) {
        return null
    }

    const Icon = attack.icon

    return (
        <div className="section">
            <div className="container container-narrow">
                {/* Back Button */}
                <Link
                    to="/cyber-attacks"
                    className="flex items-center gap-2 mb-8"
                    style={{ color: 'var(--text-muted)', fontSize: '14px' }}
                >
                    <ArrowLeft style={{ width: '16px', height: '16px' }} />
                    Back to All Attacks
                </Link>

                {/* Header */}
                <div className="card mb-8" style={{
                    padding: '32px',
                    borderColor: `${attack.color}30`
                }}>
                    <div className="flex items-start gap-5" style={{ flexWrap: 'wrap' }}>
                        <div
                            style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                background: `${attack.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                        >
                            <Icon style={{ width: '32px', height: '32px', color: attack.color }} />
                        </div>
                        <div style={{ flex: 1, minWidth: '250px' }}>
                            <div className="flex items-center gap-3 mb-3" style={{ flexWrap: 'wrap' }}>
                                <h1 className="text-title" style={{ margin: 0 }}>{attack.name}</h1>
                                <span className={`badge ${attack.severity === 'high' ? 'badge-danger' : 'badge-warning'}`}>
                                    {attack.severity} risk
                                </span>
                            </div>
                            <p className="text-secondary" style={{ margin: 0, lineHeight: '1.6' }}>
                                {attack.shortDescription}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                {attack.videoId && (
                    <section className="content-section">
                        <div className="section-header">
                            <div className="section-icon" style={{ background: 'rgba(239, 68, 68, 0.15)' }}>
                                <Play style={{ width: '20px', height: '20px', color: 'var(--danger-red)' }} />
                            </div>
                            <h2 className="section-title">Watch & Learn</h2>
                        </div>
                        <div className="video-container">
                            <iframe
                                src={`https://www.youtube.com/embed/${attack.videoId}`}
                                title={attack.videoTitle}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <p className="text-center text-muted text-small mt-4">
                            📺 {attack.videoTitle}
                        </p>
                    </section>
                )}

                <div className="divider" />

                {/* What Is It */}
                <section className="content-section">
                    <div className="section-header">
                        <div className="section-icon" style={{ background: 'rgba(6, 182, 212, 0.15)' }}>
                            <BookOpen style={{ width: '20px', height: '20px', color: 'var(--accent-cyan)' }} />
                        </div>
                        <h2 className="section-title">What is this attack?</h2>
                    </div>
                    <div className="content-card">
                        {attack.whatIsIt.split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                </section>

                <div className="divider" />

                {/* How It Happens */}
                <section className="content-section">
                    <div className="section-header">
                        <div className="section-icon" style={{ background: 'rgba(139, 92, 246, 0.15)' }}>
                            <AlertTriangle style={{ width: '20px', height: '20px', color: 'var(--accent-purple)' }} />
                        </div>
                        <h2 className="section-title">How does this attack happen?</h2>
                    </div>

                    {/* Attack Flow Diagram */}
                    <div className="flow-diagram">
                        <div className="flow-title">🔍 Attack Flow Blueprint</div>
                        <div className="flow-steps">
                            {attack.howItHappens.map((step, index) => (
                                <div key={index} className="flow-step">
                                    <div className="flow-icon">{step.icon || (index + 1)}</div>
                                    <div className="flow-content">
                                        <h5>Step {index + 1}: {step.title}</h5>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="divider" />

                {/* Real Example */}
                <section className="content-section">
                    <div className="section-header">
                        <div className="section-icon" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
                            <AlertTriangle style={{ width: '20px', height: '20px', color: '#f59e0b' }} />
                        </div>
                        <h2 className="section-title">Real-Life Example</h2>
                    </div>
                    <div className="example-card">
                        <div className="example-title">
                            <AlertTriangle style={{ width: '18px', height: '18px' }} />
                            {attack.realExample.title}
                        </div>
                        <p className="example-content">{attack.realExample.description}</p>
                        {attack.realExample.stats && (
                            <div className="stats-grid">
                                {attack.realExample.stats.map((stat, index) => (
                                    <div key={index} className="stat-card">
                                        <div className="stat-value">{stat.value}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                <div className="divider" />

                {/* Why Dangerous */}
                <section className="content-section">
                    <div className="section-header">
                        <div className="section-icon" style={{ background: 'rgba(239, 68, 68, 0.15)' }}>
                            <AlertTriangle style={{ width: '20px', height: '20px', color: 'var(--danger-red)' }} />
                        </div>
                        <h2 className="section-title">Why is this dangerous?</h2>
                    </div>
                    <ul className="info-list">
                        {attack.whyDangerous.map((reason, index) => (
                            <li key={index} className="info-list-item danger">
                                <span className="info-list-icon">⚠️</span>
                                <span>{reason}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="divider" />

                {/* How to Stay Safe */}
                <section className="content-section">
                    <div className="section-header">
                        <div className="section-icon" style={{ background: 'rgba(34, 197, 94, 0.15)' }}>
                            <Shield style={{ width: '20px', height: '20px', color: 'var(--safe-green)' }} />
                        </div>
                        <h2 className="section-title">How to Stay Safe</h2>
                    </div>
                    <ul className="info-list">
                        {attack.howToStaySafe.map((tip, index) => (
                            <li key={index} className="info-list-item safe">
                                <CheckCircle style={{ width: '18px', height: '18px', color: 'var(--safe-green)', flexShrink: 0, marginTop: '2px' }} />
                                <span>{tip}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="divider" />

                {/* PhishGuard Detection */}
                <section className="content-section">
                    <div className="card" style={{
                        padding: '28px',
                        background: 'rgba(6, 182, 212, 0.05)',
                        borderColor: 'rgba(6, 182, 212, 0.2)'
                    }}>
                        <div className="flex items-center gap-3 mb-4">
                            <Shield style={{ width: '24px', height: '24px', color: 'var(--accent-cyan)' }} />
                            <h3 className="text-card-title" style={{ margin: 0 }}>How PhishGuard Helps</h3>
                        </div>
                        <p className="text-secondary mb-6" style={{ lineHeight: '1.7' }}>
                            {attack.phishGuardDetection}
                        </p>
                        <Link to="/scanner" className="btn btn-primary">
                            <span className="btn-content">
                                <Shield style={{ width: '16px', height: '16px' }} />
                                <span>Try URL Scanner</span>
                            </span>
                        </Link>
                    </div>
                </section>

                <div className="divider" />

                {/* Related Attacks */}
                <section className="content-section">
                    <h2 className="text-subtitle mb-6">Learn About Other Attacks</h2>
                    <div className="grid-3">
                        {relatedAttacks.map((related) => {
                            const RelatedIcon = related.icon
                            return (
                                <Link
                                    key={related.id}
                                    to={`/cyber-attacks/${related.id}`}
                                    className="card card-interactive"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '10px',
                                                background: `${related.color}15`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <RelatedIcon style={{ width: '20px', height: '20px', color: related.color }} />
                                        </div>
                                        <h3 className="text-card-title" style={{ margin: 0, fontSize: '15px' }}>
                                            {related.name}
                                        </h3>
                                    </div>
                                    <p className="text-muted text-small mb-3" style={{ lineHeight: '1.5' }}>
                                        {related.shortDescription.slice(0, 80)}...
                                    </p>
                                    <div className="flex items-center gap-1" style={{ color: 'var(--accent-cyan)', fontSize: '13px', fontWeight: '500' }}>
                                        Learn More
                                        <ChevronRight style={{ width: '14px', height: '14px' }} />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </section>

                {/* Bottom CTA */}
                <div className="flex items-center justify-center gap-4 mt-12" style={{ flexWrap: 'wrap' }}>
                    <Link to="/cyber-attacks" className="btn btn-secondary">
                        <span className="btn-content">
                            <ArrowLeft style={{ width: '16px', height: '16px' }} />
                            <span>All Attacks</span>
                        </span>
                    </Link>
                    <Link to="/safety-tips" className="btn btn-primary">
                        <span className="btn-content">
                            <Shield style={{ width: '16px', height: '16px' }} />
                            <span>Safety Tips</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AttackDetail
