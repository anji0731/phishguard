import { Link } from 'react-router-dom'
import {
    Shield, AlertTriangle, CheckCircle, Info,
    FileText, Phone, Lock, Eye, MessageSquare,
    CreditCard, Users, Heart, ArrowLeft, ExternalLink
} from 'lucide-react'

function CyberCrimeHelp() {
    const hackedSigns = [
        { icon: Lock, text: 'Password changed without your knowledge' },
        { icon: Eye, text: 'Unknown login alerts from new devices or locations' },
        { icon: CreditCard, text: 'Money deducted from your account without permission' },
        { icon: MessageSquare, text: 'Messages sent from your account that you did not write' },
        { icon: Phone, text: 'OTP requests you did not ask for' }
    ]

    const immediateSteps = [
        { step: 1, title: 'Change Your Password', desc: 'Create a new, strong password immediately. Use a mix of letters, numbers, and symbols.' },
        { step: 2, title: 'Logout From All Devices', desc: 'Go to your account settings and sign out from all devices to kick out the attacker.' },
        { step: 3, title: 'Enable Two-Factor Authentication', desc: 'Add an extra layer of security so even if someone knows your password, they cannot login.' },
        { step: 4, title: 'Check Recent Activity', desc: 'Look at your account history to see what the attacker did - any messages sent, purchases made, or settings changed.' },
        { step: 5, title: 'Inform Your Bank or Service Provider', desc: 'If money is involved, call your bank immediately. They can block transactions and help recover funds.' }
    ]

    const complaintSteps = [
        {
            step: 1,
            title: 'Collect Evidence',
            desc: 'Before filing a complaint, gather all proof:',
            items: ['Screenshots of suspicious activity', 'Transaction details and receipts', 'Messages or emails from attackers', 'URLs or phone numbers used by scammers']
        },
        {
            step: 2,
            title: 'Visit Official Cyber Crime Portal',
            desc: 'Go to your country\'s official cyber crime reporting website. In India, visit cybercrime.gov.in. In other countries, search for "cyber crime report [your country]".',
            items: []
        },
        {
            step: 3,
            title: 'Fill Complaint Details',
            desc: 'You will need to provide:',
            items: ['Your personal details (name, contact, address)', 'Description of what happened', 'When and how it happened', 'Upload your evidence files']
        },
        {
            step: 4,
            title: 'Note Your Complaint Number',
            desc: 'After submitting, you will receive a complaint number. Keep this safe! You will need it to track your case and for any future communication.',
            items: []
        }
    ]

    const doNotDo = [
        { icon: AlertTriangle, text: 'Do NOT panic – stay calm and think before acting', color: 'var(--warning-yellow)' },
        { icon: CreditCard, text: 'Do NOT pay attackers any money – they will ask for more', color: 'var(--danger-red)' },
        { icon: Lock, text: 'Do NOT share OTPs with anyone, even if they claim to be from your bank', color: 'var(--danger-red)' },
        { icon: MessageSquare, text: 'Do NOT trust unknown "recovery" messages or calls', color: 'var(--warning-yellow)' },
        { icon: ExternalLink, text: 'Do NOT click on links sent by unknown people claiming to help', color: 'var(--danger-red)' }
    ]

    return (
        <div className="section">
            <div className="container container-narrow">
                {/* Back to Safety Tips */}
                <Link
                    to="/safety-tips"
                    className="flex items-center gap-2 mb-8"
                    style={{ color: 'var(--text-muted)', fontSize: '14px', textDecoration: 'none' }}
                >
                    <ArrowLeft style={{ width: '16px', height: '16px' }} />
                    Back to Safety Tips
                </Link>

                {/* Header */}
                <div className="text-center mb-8">
                    <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, var(--danger-red), #f59e0b)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px'
                    }}>
                        <Shield style={{ width: '32px', height: '32px', color: 'white' }} />
                    </div>
                    <h1 className="text-title mb-4">Cyber Crime Help</h1>
                    <p className="text-secondary" style={{ maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
                        What to do if you've been hacked, scammed, or faced unauthorized activity on your accounts.
                    </p>
                </div>

                {/* SECTION 1: Who Should Use This Page */}
                <div className="card mb-6" style={{
                    padding: '24px',
                    background: 'rgba(6, 182, 212, 0.05)',
                    borderColor: 'rgba(6, 182, 212, 0.2)'
                }}>
                    <div className="flex items-center gap-3 mb-3">
                        <Info style={{ width: '20px', height: '20px', color: 'var(--accent-cyan)' }} />
                        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: 'var(--text-primary)' }}>
                            Who Should Use This Page?
                        </h2>
                    </div>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>
                        This page is for people whose <strong style={{ color: 'var(--text-primary)' }}>accounts, money, or personal information</strong> have been
                        misused without their permission. If you think someone has accessed your account, stolen your data,
                        or cheated you online – this guide will help you take the right steps.
                    </p>
                </div>

                {/* SECTION 2: Signs You May Be Hacked */}
                <div className="card mb-6" style={{ padding: '24px' }}>
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle style={{ width: '20px', height: '20px', color: 'var(--warning-yellow)' }} />
                        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: 'var(--text-primary)' }}>
                            Signs You May Be Hacked
                        </h2>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.6' }}>
                        Watch out for these warning signs that your account may have been compromised:
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {hackedSigns.map((sign, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3"
                                style={{
                                    padding: '14px 16px',
                                    background: 'rgba(234, 179, 8, 0.05)',
                                    borderRadius: '8px',
                                    borderLeft: '3px solid var(--warning-yellow)'
                                }}
                            >
                                <sign.icon style={{ width: '18px', height: '18px', color: 'var(--warning-yellow)', flexShrink: 0 }} />
                                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{sign.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECTION 3: Immediate Steps */}
                <div className="card mb-6" style={{
                    padding: '24px',
                    background: 'rgba(239, 68, 68, 0.05)',
                    borderColor: 'rgba(239, 68, 68, 0.2)'
                }}>
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle style={{ width: '20px', height: '20px', color: 'var(--danger-red)' }} />
                        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: 'var(--text-primary)' }}>
                            ⚡ Immediate Steps (Do This First!)
                        </h2>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.6' }}>
                        If you think you've been hacked, take these steps immediately:
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {immediateSteps.map((step) => (
                            <div
                                key={step.step}
                                style={{
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    minWidth: '36px',
                                    borderRadius: '50%',
                                    background: 'var(--danger-red)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: '700',
                                    fontSize: '16px'
                                }}>
                                    {step.step}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                                        {step.title}
                                    </h3>
                                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECTION 4: How to File a Cyber Crime Complaint - INDIA */}
                <div className="card mb-6" style={{ padding: '24px' }}>
                    <div className="flex items-center gap-3 mb-4">
                        <FileText style={{ width: '20px', height: '20px', color: 'var(--accent-cyan)' }} />
                        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: 'var(--text-primary)' }}>
                            📋 How to File a Cyber Crime Complaint (India)
                        </h2>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.6' }}>
                        Follow this detailed guide to file your cyber crime complaint on the official Indian government portal:
                    </p>

                    {/* Official Portal Link */}
                    <div style={{
                        padding: '16px 20px',
                        background: 'linear-gradient(90deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                        borderRadius: '10px',
                        marginBottom: '24px',
                        border: '1px solid rgba(6, 182, 212, 0.3)'
                    }}>
                        <div className="flex items-center gap-3" style={{ flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>🔗 Official Portal:</span>
                            <a
                                href="https://cybercrime.gov.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '8px 16px',
                                    background: 'var(--accent-cyan)',
                                    borderRadius: '6px',
                                    color: 'var(--bg-primary)',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    textDecoration: 'none'
                                }}
                            >
                                cybercrime.gov.in
                                <ExternalLink style={{ width: '14px', height: '14px' }} />
                            </a>
                        </div>
                        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '10px', marginBottom: 0 }}>
                            🇮🇳 This is the official Government of India cyber crime reporting website managed by Ministry of Home Affairs.
                        </p>
                    </div>

                    {/* Detailed Steps */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        {/* Step 1: Collect Evidence */}
                        <div style={{
                            padding: '20px',
                            background: 'var(--bg-secondary)',
                            borderRadius: '12px',
                            borderLeft: '4px solid var(--accent-cyan)'
                        }}>
                            <div className="flex items-center gap-3 mb-3">
                                <div style={{
                                    width: '28px', height: '28px', borderRadius: '50%',
                                    background: 'var(--accent-cyan)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--bg-primary)', fontWeight: '700', fontSize: '14px'
                                }}>1</div>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
                                    📸 Collect Evidence First
                                </h3>
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                                Before visiting the portal, gather all proof of the cyber crime:
                            </p>
                            <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                <li style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                                    📷 <strong>Screenshots</strong> of fake messages, emails, or websites
                                </li>
                                <li style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                                    💳 <strong>Bank statements</strong> showing unauthorized transactions
                                </li>
                                <li style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                                    📱 <strong>Phone numbers/emails</strong> of scammers
                                </li>
                                <li style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                                    🔗 <strong>Website URLs</strong> used by fraudsters
                                </li>
                            </ul>
                        </div>

                        {/* Step 2: Go to Portal and Register */}
                        <div style={{
                            padding: '20px',
                            background: 'var(--bg-secondary)',
                            borderRadius: '12px',
                            borderLeft: '4px solid var(--accent-cyan)'
                        }}>
                            <div className="flex items-center gap-3 mb-3">
                                <div style={{
                                    width: '28px', height: '28px', borderRadius: '50%',
                                    background: 'var(--accent-cyan)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--bg-primary)', fontWeight: '700', fontSize: '14px'
                                }}>2</div>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
                                    🌐 Go to Portal & Create Account
                                </h3>
                            </div>
                            <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                <p style={{ marginBottom: '12px' }}>
                                    <strong>Step A:</strong> Open <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>cybercrime.gov.in</a> in your browser
                                </p>
                                <p style={{ marginBottom: '12px' }}>
                                    <strong>Step B:</strong> Click on <strong style={{ color: 'var(--accent-cyan)' }}>"File a Complaint"</strong> button
                                </p>
                                <p style={{ marginBottom: '12px' }}>
                                    <strong>Step C:</strong> Accept the Terms & Conditions
                                </p>
                                <p style={{ marginBottom: '12px' }}>
                                    <strong>Step D:</strong> Click <strong style={{ color: 'var(--accent-cyan)' }}>"Report Other Cyber Crime"</strong> or select the specific category of your complaint
                                </p>
                                <p style={{ marginBottom: '0' }}>
                                    <strong>Step E:</strong> Click <strong style={{ color: 'var(--safe-green)' }}>"Login"</strong> if you have an account, or <strong style={{ color: 'var(--warning-yellow)' }}>"Register"</strong> to create a new one
                                </p>
                            </div>
                        </div>

                        {/* Step 3: Register/Login Details */}
                        <div style={{
                            padding: '20px',
                            background: 'var(--bg-secondary)',
                            borderRadius: '12px',
                            borderLeft: '4px solid var(--accent-cyan)'
                        }}>
                            <div className="flex items-center gap-3 mb-3">
                                <div style={{
                                    width: '28px', height: '28px', borderRadius: '50%',
                                    background: 'var(--accent-cyan)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--bg-primary)', fontWeight: '700', fontSize: '14px'
                                }}>3</div>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
                                    🔑 Registration & Login Process
                                </h3>
                            </div>
                            <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                <p style={{ marginBottom: '16px', padding: '10px', background: 'rgba(234, 179, 8, 0.1)', borderRadius: '6px' }}>
                                    ⚠️ <strong>New User?</strong> Click "Register" and follow these steps:
                                </p>
                                <ol style={{ margin: '0 0 16px 0', paddingLeft: '24px' }}>
                                    <li style={{ marginBottom: '8px' }}>Enter your <strong>Mobile Number</strong></li>
                                    <li style={{ marginBottom: '8px' }}>You'll receive an <strong>OTP (One-Time Password)</strong> on your phone</li>
                                    <li style={{ marginBottom: '8px' }}>Enter the OTP to verify your mobile</li>
                                    <li style={{ marginBottom: '8px' }}>Fill your basic details: <strong>Name, Email, State</strong></li>
                                    <li style={{ marginBottom: '8px' }}>Create a <strong>Password</strong> for your account</li>
                                    <li style={{ marginBottom: '8px' }}>Your account is now created!</li>
                                </ol>
                                <p style={{ marginBottom: '0', padding: '10px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '6px' }}>
                                    ✅ <strong>Already Registered?</strong> Simply login with your Mobile Number and Password.
                                </p>
                            </div>
                        </div>

                        {/* Step 4: Fill Complaint Form */}
                        <div style={{
                            padding: '20px',
                            background: 'var(--bg-secondary)',
                            borderRadius: '12px',
                            borderLeft: '4px solid var(--accent-cyan)'
                        }}>
                            <div className="flex items-center gap-3 mb-3">
                                <div style={{
                                    width: '28px', height: '28px', borderRadius: '50%',
                                    background: 'var(--accent-cyan)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--bg-primary)', fontWeight: '700', fontSize: '14px'
                                }}>4</div>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
                                    📝 Fill the Complaint Form
                                </h3>
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                                After logging in, you will see a complaint form. Fill these details carefully:
                            </p>
                            <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                <li style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                                    👤 <strong>Your Personal Details:</strong> Name, Address, ID Proof
                                </li>
                                <li style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                                    📅 <strong>Incident Details:</strong> When did it happen? (Date & Time)
                                </li>
                                <li style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                                    📖 <strong>Description:</strong> Write clearly what happened in simple words
                                </li>
                                <li style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                                    💰 <strong>Loss Amount:</strong> If money was stolen, mention the exact amount
                                </li>
                                <li style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                                    📎 <strong>Upload Evidence:</strong> Attach your screenshots, documents, bank statements
                                </li>
                            </ul>
                        </div>

                        {/* Step 5: Submit and Get Complaint Number */}
                        <div style={{
                            padding: '20px',
                            background: 'var(--bg-secondary)',
                            borderRadius: '12px',
                            borderLeft: '4px solid var(--safe-green)'
                        }}>
                            <div className="flex items-center gap-3 mb-3">
                                <div style={{
                                    width: '28px', height: '28px', borderRadius: '50%',
                                    background: 'var(--safe-green)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--bg-primary)', fontWeight: '700', fontSize: '14px'
                                }}>5</div>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
                                    ✅ Submit & Save Complaint Number
                                </h3>
                            </div>
                            <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                <p style={{ marginBottom: '12px' }}>
                                    After filling the form, click <strong style={{ color: 'var(--safe-green)' }}>"Submit"</strong> button.
                                </p>
                                <div style={{ padding: '14px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                                    <p style={{ margin: 0 }}>
                                        🎫 You will receive a <strong style={{ color: 'var(--safe-green)' }}>Complaint Number</strong> (e.g., NCRP12345678)
                                    </p>
                                </div>
                                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                    <li style={{ marginBottom: '6px' }}>📝 <strong>Write this number down</strong> and keep it safe!</li>
                                    <li style={{ marginBottom: '6px' }}>📧 You will also receive it via <strong>SMS and Email</strong></li>
                                    <li style={{ marginBottom: '6px' }}>🔍 Use this number to <strong>track your complaint status</strong> on the portal</li>
                                    <li style={{ marginBottom: '0' }}>⏰ Police may contact you within <strong>3-7 working days</strong></li>
                                </ul>
                            </div>
                        </div>

                        {/* Helpline Info */}
                        <div style={{
                            padding: '16px 20px',
                            background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                            borderRadius: '10px',
                            border: '1px solid rgba(239, 68, 68, 0.3)'
                        }}>
                            <div className="flex items-center gap-3">
                                <Phone style={{ width: '20px', height: '20px', color: 'var(--danger-red)' }} />
                                <div>
                                    <p style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: '600', margin: '0 0 4px 0' }}>
                                        📞 Cyber Crime Helpline: <strong style={{ color: 'var(--danger-red)' }}>1930</strong>
                                    </p>
                                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
                                        This is the national toll-free helpline for reporting cyber crimes and financial frauds in India.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 5: Cyber Laws Awareness */}
                <div className="card mb-6" style={{
                    padding: '24px',
                    background: 'rgba(139, 92, 246, 0.05)',
                    borderColor: 'rgba(139, 92, 246, 0.2)'
                }}>
                    <div className="flex items-center gap-3 mb-4">
                        <Shield style={{ width: '20px', height: '20px', color: 'var(--accent-purple)' }} />
                        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: 'var(--text-primary)' }}>
                            Know Your Rights – Cyber Laws
                        </h2>
                    </div>
                    <div style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '16px' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Cyber crime is punishable by law.</strong> If someone hacks your account,
                            steals your money, or misuses your personal information online – they are breaking the law.
                        </p>
                        <p style={{ marginBottom: '16px' }}>
                            Common cyber crimes include <strong style={{ color: 'var(--accent-purple)' }}>hacking, identity theft, online fraud,
                                and phishing scams</strong>. All of these are illegal and can result in fines or jail time for the attacker.
                        </p>
                        <p style={{ margin: 0 }}>
                            As a victim, you have the <strong style={{ color: 'var(--safe-green)' }}>full right to file a complaint</strong> and
                            seek help from authorities. Do not hesitate to report the crime.
                        </p>
                    </div>
                </div>

                {/* SECTION 6: What NOT To Do */}
                <div className="card mb-6" style={{ padding: '24px' }}>
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle style={{ width: '20px', height: '20px', color: 'var(--danger-red)' }} />
                        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: 'var(--text-primary)' }}>
                            ❌ What NOT To Do
                        </h2>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.6' }}>
                        Avoid these common mistakes that can make the situation worse:
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {doNotDo.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3"
                                style={{
                                    padding: '14px 16px',
                                    background: 'rgba(239, 68, 68, 0.05)',
                                    borderRadius: '8px'
                                }}
                            >
                                <item.icon style={{ width: '18px', height: '18px', color: item.color, flexShrink: 0 }} />
                                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECTION 7: Reassurance Message */}
                <div className="card mb-6" style={{
                    padding: '28px',
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                    borderColor: 'rgba(34, 197, 94, 0.2)',
                    textAlign: 'center'
                }}>
                    <Heart style={{ width: '40px', height: '40px', color: 'var(--safe-green)', margin: '0 auto 16px' }} />
                    <h2 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '12px' }}>
                        You Are Not Alone
                    </h2>
                    <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '500px', margin: '0 auto' }}>
                        Cyber crimes can happen to anyone – students, professionals, and even tech experts.
                        Taking the right steps early can significantly reduce the damage. Stay calm, act quickly, and seek help.
                    </p>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center justify-center gap-4 mb-6" style={{ flexWrap: 'wrap' }}>
                    <Link to="/safety-tips" className="btn btn-secondary rounded-full">
                        <span className="btn-content">
                            <Shield style={{ width: '16px', height: '16px' }} />
                            <span>Safety Tips</span>
                        </span>
                    </Link>
                    <Link to="/cyber-attacks" className="btn btn-primary rounded-full">
                        <span className="btn-content">
                            <Eye style={{ width: '16px', height: '16px' }} />
                            <span>Learn About Attacks</span>
                        </span>
                    </Link>
                </div>

                {/* Legal Disclaimer */}
                <div style={{
                    padding: '16px',
                    background: 'rgba(100, 116, 139, 0.1)',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                        ⚖️ <strong>Disclaimer:</strong> This information is for awareness and guidance only.
                        PhishGuard does not provide legal advice or law enforcement services.
                        For legal assistance, please contact a qualified professional or your local cyber crime cell.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CyberCrimeHelp
