import { Link } from 'react-router-dom'
import {
    Info, Shield, Code, Target, Users, Heart,
    BookOpen, Search, Lightbulb, ChevronRight
} from 'lucide-react'

function About() {
    const features = [
        {
            icon: Search,
            title: 'URL Scanner',
            description: 'Analyze websites for phishing patterns, SSL issues, and brand impersonation.'
        },
        {
            icon: BookOpen,
            title: 'Attack Education',
            description: '8 major cyber attacks explained in simple language anyone can understand.'
        },
        {
            icon: Lightbulb,
            title: 'Safety Tips',
            description: 'Practical guidelines to keep you safe online every day.'
        }
    ]

    const techStack = [
        { name: 'React', description: 'Frontend Framework' },
        { name: 'Vite', description: 'Build Tool' },
        { name: 'Tailwind CSS', description: 'Styling' },
        { name: 'React Router', description: 'Navigation' },
        { name: 'Lucide React', description: 'Icons' },
        { name: 'Context API', description: 'State Management' }
    ]

    return (
        <div className="section">
            <div className="container max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 mb-6">
                        <Info className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        About PhishGuard
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A cybersecurity awareness and protection tool designed to help
                        students and everyday users stay safe online.
                    </p>
                </div>

                {/* Mission */}
                <div className="glass-card p-8 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-cyan-500/20">
                            <Target className="w-8 h-8 text-cyan-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
                            <p className="text-gray-300 leading-relaxed">
                                PhishGuard was created with one simple goal: to make cybersecurity
                                education accessible to everyone. We believe that understanding how
                                cyber attacks work is the first step to protecting yourself online.
                            </p>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                Our platform uses simulations and educational content to help users
                                identify fake websites, understand common attack techniques, and learn
                                best practices for staying safe online – all explained in simple words
                                that even a student can understand.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-white mb-6 text-center">What PhishGuard Offers</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="card text-center">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                                    <feature.icon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Who Is This For */}
                <div className="glass-card p-8 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-purple-500/20">
                            <Users className="w-8 h-8 text-purple-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white mb-3">Who Is This For?</h2>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span><strong>Students</strong> - Learn about cybersecurity in simple terms</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span><strong>Parents</strong> - Understand threats to protect your family</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span><strong>Small Business Owners</strong> - Basic security awareness for your team</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span><strong>Anyone</strong> - Who wants to browse the internet more safely</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="glass-card p-8 mb-8">
                    <div className="flex items-center gap-2 mb-6">
                        <Code className="w-6 h-6 text-green-400" />
                        <h2 className="text-xl font-bold text-white">Built With</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {techStack.map((tech, index) => (
                            <div key={index} className="p-4 rounded-lg bg-gray-900/50 text-center">
                                <p className="font-semibold text-white">{tech.name}</p>
                                <p className="text-gray-500 text-sm">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Important Notice */}
                <div className="card bg-yellow-500/5 border-yellow-500/30 mb-8">
                    <div className="flex items-start gap-4">
                        <Shield className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-yellow-400 mb-2">Educational Purpose Only</h3>
                            <p className="text-gray-300 text-sm">
                                PhishGuard is an educational tool designed for awareness purposes.
                                It does not perform actual penetration testing, access target websites,
                                or collect any user data. All scanning is simulated based on URL patterns
                                and publicly available information.
                            </p>
                        </div>
                    </div>
                </div>



                {/* CTA */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/scanner" className="btn btn-primary btn-lg">
                        <span className="btn-content">
                            <Shield className="w-5 h-5" />
                            <span>Try URL Scanner</span>
                        </span>
                    </Link>
                    <Link to="/disclaimer" className="btn btn-secondary btn-lg">
                        <span className="btn-content">
                            <Info className="w-5 h-5" />
                            <span>Read Disclaimer</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About
