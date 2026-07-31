import { Component } from 'react'
import ErrorFallback from './ErrorFallback'

/** Capture les crashs React et affiche une page d’erreur utilisable. */
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info?.componentStack)
  }

  reset = () => this.setState({ error: null })

  render() {
    if (this.state.error) {
      return (
        <ErrorFallback
          error={this.state.error}
          onRetry={this.reset}
          variant={this.props.variant || 'crash'}
        />
      )
    }
    return this.props.children
  }
}
