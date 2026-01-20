import { Link } from 'react-router-dom'
import {
    Shield, Search, BookOpen, Lightbulb, ChevronRight,
    AlertTriangle, Lock, Eye, Zap, CheckCircle
} from 'lucide-react'

function Home() {
    const features = [
        {
            icon: Search,
            title: 'URL Scanner',
            description: 'Analyze any website URL to detect phishing attempts and security threats.',
            link: '/scanner',
            color: '#06b6d4'
        },
        {
            icon: Eye,
            title: 'Learn Cyber Attacks',
            description: 'Understand 8 major cyber attacks explained in simple language.',
            link: '/cyber-attacks',
            color: '#8b5cf6'
        },
        {
            icon: Lightbulb,
            title: 'Safety Tips',
            description: 'Practical tips and best practices to keep yourself safe online.',
            link: '/safety-tips',
            color: '#22c55e'
        }
    ]

    const scanChecks = [
        { icon: AlertTriangle, text: 'Suspicious Patterns' },
        { icon: Lock, text: 'HTTPS Verification' },
        { icon: Eye, text: 'Brand Impersonation' },
        { icon: Zap, text: 'Blacklist Check' }
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        {/* Badge */}
                        <div className="badge badge-accent mb-6" style={{ display: 'inline-flex' }}>
                            <Shield style={{ width: '14px', height: '14px' }} />
                            Cybersecurity Awareness Tool
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-hero gradient-text mb-4">
                            PhishGuard
                        </h1>
                        <h2 className="text-title mb-6" style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>
                            Fake Website & Phishing Detector
                        </h2>

                        <p className="text-body mb-8" style={{
                            color: 'var(--text-muted)',
                            maxWidth: '600px',
                            margin: '0 auto 32px',
                            lineHeight: '1.7'
                        }}>
                            Protect yourself from online threats. Scan any URL to check if it's safe,
                            and learn about cyber attacks in simple words that everyone can understand.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex items-center justify-center gap-4" style={{ flexWrap: 'wrap' }}>
                            <Link to="/scanner" className="btn btn-primary btn-lg">
                                <span className="btn-content">
                                    <Shield style={{ width: '18px', height: '18px' }} />
                                    <span>Scan a URL</span>
                                </span>
                            </Link>
                            <Link to="/cyber-attacks" className="btn btn-secondary btn-lg">
                                <span className="btn-content">
                                    <Eye style={{ width: '18px', height: '18px' }} />
                                    <span>Learn About Attacks</span>
                                </span>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center justify-center gap-6 mt-8" style={{ flexWrap: 'wrap' }}>
                            {[
                                { text: '100% Free' },
                                { text: 'No Sign-up Required' },
                                { text: 'Educational Purpose' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                                    <CheckCircle style={{ width: '16px', height: '16px', color: 'var(--safe-green)' }} />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Scan Preview */}
            <section className="section-sm" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="card" style={{ maxWidth: '700px', margin: '0 auto', padding: '32px' }}>
                        <div className="text-center mb-6">
                            <h3 className="text-subtitle mb-2">Quick URL Check</h3>
                            <p className="text-muted">Enter any website address to check if it's safe</p>
                        </div>

                        <Link to="/scanner" className="flex gap-4" style={{ display: 'flex' }}>
                            <input
                                type="text"
                                placeholder="Enter website URL (e.g., example.com)"
                                className="input"
                                style={{ flex: 1 }}
                                readOnly
                            />
                            <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                                <span className="btn-content">
                                    <Shield style={{ width: '18px', height: '18px' }} />
                                    <span>Scan Now</span>
                                </span>
                            </button>
                        </Link>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '16px',
                            marginTop: '24px'
                        }}>
                            {scanChecks.map((check, index) => (
                                <div key={index} className="flex items-center gap-2" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                                    <check.icon style={{ width: '16px', height: '16px', color: 'var(--accent-cyan)' }} />
                                    <span>{check.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-title mb-4">What Can PhishGuard Do?</h2>
                        <p className="text-secondary" style={{ maxWidth: '500px', margin: '0 auto' }}>
                            Your companion for staying safe online. Here's how we help protect you.
                        </p>
                    </div>

                    <div className="grid-3">
                        {features.map((feature, index) => (
                            <Link
                                key={index}
                                to={feature.link}
                                className="card card-interactive"
                                style={{ textAlign: 'center', padding: '32px 24px' }}
                            >
                                <div
                                    style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        backgroundColor: `${feature.color}15`
                                    }}
                                >
                                    <feature.icon style={{ width: '28px', height: '28px', color: feature.color }} />
                                </div>
                                <h3 className="text-card-title mb-3" style={{ color: 'var(--text-primary)' }}>
                                    {feature.title}
                                </h3>
                                <p className="text-secondary text-small mb-4" style={{ lineHeight: '1.6' }}>
                                    {feature.description}
                                </p>
                                <div className="flex items-center justify-center gap-1" style={{ color: 'var(--accent-cyan)', fontSize: '14px', fontWeight: '500' }}>
                                    Explore
                                    <ChevronRight style={{ width: '16px', height: '16px' }} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-sm" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '24px',
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        {[
                            { value: '5+', label: 'Security Checks' },
                            { value: '8', label: 'Attack Types' },
                            { value: '100%', label: 'Free & Educational' },
                            { value: '0', label: 'Data Collected' }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-title gradient-text mb-2">{stat.value}</div>
                                <div className="text-muted text-small">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '500px', margin: '0 auto' }}>
                        <h2 className="text-title mb-4">Ready to Stay Safe Online?</h2>
                        <p className="text-muted mb-8">
                            Start scanning URLs and learning about cyber threats today.
                            It's completely free and requires no sign-up.
                        </p>
                        <div className="flex items-center justify-center gap-4" style={{ flexWrap: 'wrap' }}>
                            <Link to="/scanner" className="btn btn-primary btn-lg">
                                <span className="btn-content">
                                    <Shield style={{ width: '18px', height: '18px' }} />
                                    <span>Start Scanning</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
