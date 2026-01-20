import { Component } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo)
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null })
        window.location.href = '/'
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen cyber-bg flex items-center justify-center p-6">
                    <div className="glass-card p-8 max-w-md text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-4">Something Went Wrong</h1>
                        <p className="text-gray-400 mb-6">
                            An unexpected error occurred. Please try refreshing the page or go back to home.
                        </p>
                        <button
                            onClick={this.handleReset}
                            className="btn btn-primary"
                        >
                            <span className="btn-content">
                                <RefreshCw className="w-5 h-5" />
                                <span>Go to Home</span>
                            </span>
                        </button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
