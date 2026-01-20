import { Link } from 'react-router-dom'
import {
    FileWarning, Shield, AlertTriangle, CheckCircle,
    Scale, BookOpen, Info
} from 'lucide-react'

function Disclaimer() {
    return (
        <div className="section">
            <div className="container max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 mb-6">
                        <FileWarning className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Disclaimer & Terms
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Please read this disclaimer carefully before using PhishGuard.
                    </p>
                </div>

                {/* Main Disclaimer */}
                <div className="glass-card p-8 mb-8 bg-yellow-500/5 border border-yellow-500/30">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-bold text-yellow-400 mb-4">
                                Important Notice
                            </h2>
                            <div className="space-y-4 text-gray-300">
                                <p className="text-lg font-medium">
                                    This website does NOT hack or attack any system.
                                </p>
                                <p>
                                    PhishGuard analyzes publicly available information and uses
                                    <strong className="text-white"> simulations for educational purposes only</strong>.
                                    We do not:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400">•</span>
                                        Access, penetrate, or scan the actual target websites
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400">•</span>
                                        Perform any form of hacking or unauthorized access
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400">•</span>
                                        Store or collect any personal user data
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400">•</span>
                                        Send any malicious requests or payloads
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400">•</span>
                                        Guarantee 100% accuracy of scan results
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Educational Purpose */}
                <div className="card mb-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-blue-500/20">
                            <BookOpen className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white mb-3">Educational Purpose</h2>
                            <p className="text-gray-300 mb-4">
                                PhishGuard is designed to be an educational cybersecurity awareness tool.
                                Our goal is to:
                            </p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Teach users how to identify suspicious websites</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Explain common cyber attacks in simple language</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Provide practical safety tips for online protection</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Raise awareness about cybersecurity threats</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* How Scanning Works */}
                <div className="card mb-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-cyan-500/20">
                            <Info className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white mb-3">How Our Scanning Works</h2>
                            <p className="text-gray-300 mb-4">
                                Our URL scanner uses the following techniques, all of which are
                                simulated and do NOT involve contacting the target website:
                            </p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400">1.</span>
                                    <span><strong>URL Pattern Analysis</strong> - We analyze the URL string for suspicious patterns, keywords, and structures commonly used in phishing.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400">2.</span>
                                    <span><strong>Domain Checks</strong> - We examine domain characteristics based on URL structure (simulated).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400">3.</span>
                                    <span><strong>Brand Detection</strong> - We check if the URL appears to impersonate known brands.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400">4.</span>
                                    <span><strong>Protocol Check</strong> - We verify if HTTPS is used in the URL.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Limitations */}
                <div className="card mb-8 bg-red-500/5 border-red-500/30">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-red-500/20">
                            <AlertTriangle className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-red-400 mb-3">Limitations</h2>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">•</span>
                                    <span>Scan results are based on simulations and heuristics, NOT real-time website analysis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">•</span>
                                    <span>We cannot guarantee 100% accuracy in detecting all phishing sites</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">•</span>
                                    <span>A "safe" result does not guarantee a website is completely safe</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">•</span>
                                    <span>Always use additional verification methods for important transactions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">•</span>
                                    <span>This tool is for educational purposes and should not replace professional security solutions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Legal */}
                <div className="card mb-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-purple-500/20">
                            <Scale className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white mb-3">Terms of Use</h2>
                            <div className="space-y-4 text-gray-300 text-sm">
                                <p>
                                    By using PhishGuard, you agree to the following terms:
                                </p>
                                <ol className="space-y-2 ml-4">
                                    <li>
                                        <strong>1. Educational Use</strong> - This tool is intended for educational
                                        and awareness purposes only.
                                    </li>
                                    <li>
                                        <strong>2. No Guarantee</strong> - We make no warranties about the accuracy,
                                        completeness, or reliability of scan results.
                                    </li>
                                    <li>
                                        <strong>3. No Liability</strong> - PhishGuard and its creators are not liable
                                        for any damages resulting from the use of this tool.
                                    </li>
                                    <li>
                                        <strong>4. Responsible Use</strong> - You agree to use this tool responsibly
                                        and not for any malicious purposes.
                                    </li>
                                    <li>
                                        <strong>5. No Data Collection</strong> - We do not store or collect any personal
                                        information or scan history on our servers.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Acknowledgment */}
                <div className="glass-card p-6 text-center mb-8">
                    <Shield className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
                    <p className="text-gray-300">
                        By using PhishGuard, you acknowledge that you have read, understood,
                        and agree to this disclaimer.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/scanner" className="btn btn-primary btn-lg">
                        <span className="btn-content">
                            <Shield className="w-5 h-5" />
                            <span>Use Scanner</span>
                        </span>
                    </Link>
                    <Link to="/about" className="btn btn-secondary btn-lg">
                        <span className="btn-content">
                            <Info className="w-5 h-5" />
                            <span>About PhishGuard</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Disclaimer
