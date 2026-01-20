import { Link } from 'react-router-dom'
import {
    Lightbulb, Shield, Lock, Eye, Mail, Smartphone,
    Wifi, Download, Key, Globe, CheckCircle, AlertTriangle
} from 'lucide-react'

function SafetyTips() {
    const tipCategories = [
        {
            title: 'Password Security',
            icon: Key,
            color: '#22c55e',
            tips: [
                'Use at least 12 characters for all passwords',
                'Never use the same password on multiple sites',
                'Use a password manager to remember passwords',
                'Enable two-factor authentication (2FA) everywhere',
                'Never share your passwords with anyone',
                'Change passwords if a website reports a data breach'
            ]
        },
        {
            title: 'Email Safety',
            icon: Mail,
            color: '#3b82f6',
            tips: [
                'Don\'t click links in unexpected emails',
                'Verify sender\'s email address carefully',
                'Be suspicious of urgent or threatening language',
                'Never download unexpected attachments',
                'When in doubt, contact the sender directly by phone',
                'Use spam filters and report phishing emails'
            ]
        },
        {
            title: 'Browsing Safely',
            icon: Globe,
            color: '#8b5cf6',
            tips: [
                'Always check for HTTPS (padlock icon) before entering data',
                'Verify website URLs for misspellings',
                'Don\'t download software from unknown sources',
                'Keep your browser updated',
                'Use an ad blocker to avoid malicious ads',
                'Be careful with pop-ups claiming you won prizes'
            ]
        },
        {
            title: 'Phone & Apps',
            icon: Smartphone,
            color: '#ec4899',
            tips: [
                'Only download apps from official app stores',
                'Check app permissions before installing',
                'Keep your phone OS and apps updated',
                'Don\'t root or jailbreak your device',
                'Be suspicious of apps that request too many permissions',
                'Regularly review and remove unused apps'
            ]
        },
        {
            title: 'Public WiFi',
            icon: Wifi,
            color: '#f59e0b',
            tips: [
                'Avoid banking or shopping on public WiFi',
                'Use a VPN when connecting to public networks',
                'Verify WiFi network names with staff',
                'Turn off auto-connect to WiFi networks',
                'Prefer mobile data for sensitive activities',
                'Forget public networks after using them'
            ]
        },
        {
            title: 'Device Protection',
            icon: Shield,
            color: '#06b6d4',
            tips: [
                'Install and update antivirus software',
                'Keep your operating system updated',
                'Enable firewall protection',
                'Lock your devices with strong PINs or passwords',
                'Back up important data regularly',
                'Enable remote wipe for lost devices'
            ]
        }
    ]

    const quickDos = [
        'Use strong, unique passwords',
        'Enable two-factor authentication',
        'Keep software updated',
        'Verify before clicking links',
        'Back up your data regularly',
        'Use HTTPS websites only'
    ]

    const quickDonts = [
        'Don\'t reuse passwords',
        'Don\'t click unknown links',
        'Don\'t share personal info publicly',
        'Don\'t ignore security warnings',
        'Don\'t download from unknown sources',
        'Don\'t use public WiFi for banking'
    ]

    return (
        <>
            {/* Scrolling Alert Banner - Adjusted Placement */}
            <Link
                to="/cyber-crime-help"
                style={{
                    display: 'block',
                    background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.2) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(6, 182, 212, 0.2) 100%)',
                    borderBottom: '1px solid rgba(6, 182, 212, 0.3)',
                    padding: '10px 0',
                    overflow: 'hidden',
                    textDecoration: 'none'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        animation: 'scrollBanner 20s linear infinite',
                        whiteSpace: 'nowrap',
                        width: 'max-content',
                        paddingLeft: '100%'
                    }}
                >
                    <Shield style={{ width: '16px', height: '16px', color: 'var(--accent-cyan)' }} />
                    <span style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: 'var(--accent-cyan)',
                        letterSpacing: '0.3px'
                    }}>
                        🚨 Been Hacked? Get Detailed Help & File Cyber Crime Complaint Here →
                    </span>
                </div>
                <style>{`
                    @keyframes scrollBanner {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-100%); }
                    }
                `}</style>
            </Link>

            <div className="section">
                <div className="container max-w-5xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-600 mb-6">
                            <Lightbulb className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Cybersecurity Safety Tips
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Simple practices to keep yourself safe online. Follow these tips to protect
                            yourself from hackers and cyber threats.
                        </p>
                    </div>

                    {/* Quick Do's and Don'ts */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="card bg-green-500/5 border-green-500/30">
                            <div className="flex items-center gap-2 mb-4">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                                <h2 className="text-xl font-bold text-green-400">Do's ✓</h2>
                            </div>
                            <ul className="space-y-3">
                                {quickDos.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card bg-red-500/5 border-red-500/30">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className="w-6 h-6 text-red-400" />
                                <h2 className="text-xl font-bold text-red-400">Don'ts ✗</h2>
                            </div>
                            <ul className="space-y-3">
                                {quickDonts.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <span className="text-red-400 font-bold">✗</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Detailed Tips by Category */}
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">
                        Detailed Safety Guidelines
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {tipCategories.map((category, index) => {
                            const Icon = category.icon
                            return (
                                <div key={index} className="card">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="p-3 rounded-xl"
                                            style={{ backgroundColor: `${category.color}20` }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: category.color }} />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">{category.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {category.tips.map((tip, tipIndex) => (
                                            <li key={tipIndex} className="flex items-start gap-2 text-sm">
                                                <span style={{ color: category.color }} className="mt-1">•</span>
                                                <span className="text-gray-400">{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>

                    {/* Emergency Steps */}
                    <div className="glass-card p-8 mb-12 bg-red-500/5 border border-red-500/30">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-red-500/20">
                                <AlertTriangle className="w-8 h-8 text-red-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-red-400 mb-4">
                                    If You Think You've Been Hacked
                                </h2>
                                <ol className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                                        <span><strong>Stay calm</strong> - Don't panic, but act quickly</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                                        <span><strong>Change passwords</strong> - Start with your email, then other accounts</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                                        <span><strong>Enable 2FA</strong> - Add two-factor authentication immediately</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                                        <span><strong>Scan for malware</strong> - Run a full antivirus scan</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                                        <span><strong>Monitor accounts</strong> - Check for unauthorized transactions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                                        <span><strong>Report</strong> - File a report with local cyber crime authorities</span>
                                    </li>
                                </ol>

                            </div>
                        </div>
                    </div>

                    {/* Security Checklist */}
                    <div className="glass-card p-8 mb-12">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">
                            Monthly Security Checklist
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Update all software and apps',
                                'Review account permissions',
                                'Check for suspicious login activity',
                                'Back up important files',
                                'Review connected apps and services',
                                'Delete unused accounts',
                                'Check credit card statements',
                                'Update emergency contacts'
                            ].map((item, index) => (
                                <label key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 cursor-pointer hover:bg-gray-800/50 transition-colors">
                                    <input type="checkbox" className="w-5 h-5 rounded border-gray-600 text-cyan-500 focus:ring-cyan-500" />
                                    <span className="text-gray-300">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <p className="text-gray-400 mb-4">
                            Want to check if a website is safe?
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/scanner" className="btn btn-primary btn-lg">
                                <span className="btn-content">
                                    <Shield className="w-5 h-5" />
                                    <span>Scan a URL</span>
                                </span>
                            </Link>
                            <Link to="/cyber-attacks" className="btn btn-secondary btn-lg">
                                <span className="btn-content">
                                    <Eye className="w-5 h-5" />
                                    <span>Learn About Attacks</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SafetyTips
