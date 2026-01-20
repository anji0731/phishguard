import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

function AttackCard({ attack }) {
    const { id, name, icon: Icon, shortDescription, severity, color } = attack

    const severityColors = {
        high: 'bg-red-500/20 text-red-400 border-red-500/30',
        medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
        low: 'bg-green-500/20 text-green-400 border-green-500/30',
    }

    return (
        <Link
            to={`/cyber-attacks/${id}`}
            className="card group cursor-pointer block"
            style={{ padding: '1.5rem' }}
        >
            <div className="flex items-start gap-5">
                <div
                    className="p-4 rounded-xl transition-all group-hover:scale-110 flex-shrink-0"
                    style={{ backgroundColor: `${color}20` }}
                >
                    <Icon className="w-8 h-8" style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors">
                            {name}
                        </h3>
                        <span className={`badge text-xs flex-shrink-0 ${severityColors[severity]}`}>
                            {severity}
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {shortDescription}
                    </p>
                    <div className="flex items-center text-cyan-400 text-sm font-medium">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AttackCard
