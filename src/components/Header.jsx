import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Shield, Search, Menu, X, AlertTriangle } from 'lucide-react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/scanner', label: 'Scanner' },
        { to: '/cyber-attacks', label: 'Learn Attacks' },
        { to: '/safety-tips', label: 'Safety Tips' },
        { to: '/about', label: 'About' },
        { to: '/disclaimer', label: 'Disclaimer' }
    ]

    return (
        <header style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div className="container">
                <div className="flex items-center justify-between" style={{ height: '70px' }}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Shield style={{ width: '22px', height: '22px', color: 'white' }} />
                        </div>
                        <div>
                            <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>
                                PhishGuard
                            </div>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '-2px' }}>
                                Fake Website Detector
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="flex items-center gap-1" style={{ display: 'none' }} id="desktop-nav">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                style={({ isActive }) => ({
                                    padding: '8px 14px',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    borderRadius: '6px',
                                    transition: 'all 0.2s'
                                })}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                    <style>{`
            @media (min-width: 1024px) {
              #desktop-nav { display: flex !important; }
              #mobile-menu-btn { display: none !important; }
            }
          `}</style>

                    {/* CTA + Mobile Menu Button */}
                    <div className="flex items-center gap-3">
                        <Link to="/scanner" className="btn btn-primary" style={{ display: 'none', padding: '8px 16px', fontSize: '14px' }} id="header-cta">
                            <span className="btn-content" style={{ gap: '8px' }}>
                                <Search style={{ width: '16px', height: '16px' }} />
                                <span>Scan URL</span>
                            </span>
                        </Link>
                        <style>{`@media (min-width: 768px) { #header-cta { display: inline-flex !important; } }`}</style>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            id="mobile-menu-btn"
                            style={{
                                background: 'var(--bg-elevated)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '8px',
                                padding: '10px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {isMenuOpen ? (
                                <X style={{ width: '20px', height: '20px', color: 'var(--text-primary)' }} />
                            ) : (
                                <Menu style={{ width: '20px', height: '20px', color: 'var(--text-primary)' }} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav style={{
                        padding: '16px 0',
                        borderTop: '1px solid var(--border-color)'
                    }}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMenuOpen(false)}
                                style={({ isActive }) => ({
                                    display: 'block',
                                    padding: '12px 0',
                                    fontSize: '15px',
                                    fontWeight: '500',
                                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    borderBottom: '1px solid var(--border-color)'
                                })}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/scanner"
                            onClick={() => setIsMenuOpen(false)}
                            className="btn btn-primary w-full"
                            style={{ marginTop: '16px', justifyContent: 'center' }}
                        >
                            <span className="btn-content">
                                <Search style={{ width: '16px', height: '16px' }} />
                                <span>Scan a Website</span>
                            </span>
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header

