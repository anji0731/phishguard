function ScoreGauge({ score }) {
    const getColor = () => {
        if (score >= 70) return { color: '#22c55e', label: 'Safe' }
        if (score >= 40) return { color: '#eab308', label: 'Caution' }
        return { color: '#ef4444', label: 'Danger' }
    }

    const { color, label } = getColor()
    const circumference = 2 * Math.PI * 60
    const strokeDashoffset = circumference - (score / 100) * circumference

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-40 h-40">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#1f2937"
                        strokeWidth="12"
                        fill="none"
                    />
                    <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke={color}
                        strokeWidth="12"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{
                            transition: 'stroke-dashoffset 1s ease-out',
                            filter: `drop-shadow(0 0 10px ${color}40)`,
                        }}
                    />
                </svg>

                {/* Score Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span
                        className="text-4xl font-bold"
                        style={{ color }}
                    >
                        {score}
                    </span>
                    <span className="text-sm text-gray-400">out of 100</span>
                </div>
            </div>

            <div className="mt-4 text-center">
                <span
                    className="text-lg font-semibold"
                    style={{ color }}
                >
                    {label}
                </span>
            </div>
        </div>
    )
}

export default ScoreGauge
