import { Link } from 'react-router-dom'
import { Shield, Github, Mail, Heart, Linkedin, Globe } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-color)',
            marginTop: 'auto'
        }}>
            <div className="container" style={{ padding: '48px 24px 32px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Shield style={{ width: '18px', height: '18px', color: 'white' }} />
                            </div>
                            <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)' }}>
                                PhishGuard
                            </span>
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '250px' }}>
                            Free cybersecurity awareness tool for detecting fake websites and learning about cyber threats.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>
                            Quick Links
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/scanner', label: 'URL Scanner' },
                                { to: '/cyber-attacks', label: 'Cyber Attacks' },
                                { to: '/safety-tips', label: 'Safety Tips' }
                            ].map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    style={{ fontSize: '14px', color: 'var(--text-muted)' }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>
                            Resources
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {[
                                { to: '/about', label: 'About Project' },
                                { to: '/disclaimer', label: 'Disclaimer' }
                            ].map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    style={{ fontSize: '14px', color: 'var(--text-muted)' }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>
                            Connect
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <a
                                href="https://github.com/anji0731"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px' }}
                            >
                                <Github style={{ width: '16px', height: '16px' }} />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/srianjaneyulu0731/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px' }}
                            >
                                <Linkedin style={{ width: '16px', height: '16px' }} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="mailto:srianjaneyulu0731@gmail.com"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px' }}
                            >
                                <Mail style={{ width: '16px', height: '16px' }} />
                                <span>Email</span>
                            </a>
                            <a
                                href="https://srianjaneyulu.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px' }}
                            >
                                <Globe style={{ width: '16px', height: '16px' }} />
                                <span>Portfolio</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{
                    paddingTop: '24px',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px'
                }}>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                        © {currentYear} PhishGuard. Educational purposes only.
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        Made with <Heart style={{ width: '14px', height: '14px', color: 'var(--danger-red)' }} /> by Sripalasetti Sri Anjaneyulu
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
