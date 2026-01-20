import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

function AnalysisCard({ title, status, description, details }) {
    const statusConfig = {
        pass: {
            icon: CheckCircle,
            color: 'text-green-400',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500/30',
            label: 'Passed',
        },
        warning: {
            icon: AlertTriangle,
            color: 'text-yellow-400',
            bgColor: 'bg-yellow-500/10',
            borderColor: 'border-yellow-500/30',
            label: 'Warning',
        },
        fail: {
            icon: XCircle,
            color: 'text-red-400',
            bgColor: 'bg-red-500/10',
            borderColor: 'border-red-500/30',
            label: 'Failed',
        },
    }

    const config = statusConfig[status] || statusConfig.pass
    const Icon = config.icon

    return (
        <div className={`card ${config.bgColor} ${config.borderColor} animate-fade-in`}>
            <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${config.bgColor}`}>
                    <Icon className={`w-6 h-6 ${config.color}`} />
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white">{title}</h3>
                        <span className={`text-sm font-medium ${config.color}`}>
                            {config.label}
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{description}</p>
                    {details && (
                        <p className="text-gray-500 text-xs bg-gray-900/50 rounded-lg p-3 mt-3">
                            {details}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AnalysisCard
