import { ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react'

function RiskBadge({ level }) {
    const config = {
        safe: {
            icon: ShieldCheck,
            label: 'SAFE',
            className: 'bg-green-500/20 text-green-400 border border-green-500/30',
        },
        medium: {
            icon: ShieldAlert,
            label: 'MEDIUM RISK',
            className: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
        },
        high: {
            icon: ShieldX,
            label: 'HIGH RISK',
            className: 'bg-red-500/20 text-red-400 border border-red-500/30',
        },
    }

    const { icon: Icon, label, className } = config[level] || config.safe

    return (
        <div className={`badge ${className}`}>
            <Icon className="w-4 h-4" />
            {label}
        </div>
    )
}

export default RiskBadge
