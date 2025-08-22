import * as React from 'react';

interface ModuleFederationErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  moduleName?: string;
}

interface ModuleFederationErrorBoundaryState {
  hasError: boolean;
  errorMessage?: string;
}

export class ModuleFederationErrorBoundary extends React.Component<
  ModuleFederationErrorBoundaryProps,
  ModuleFederationErrorBoundaryState
> {
  constructor(props: ModuleFederationErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ModuleFederationErrorBoundaryState {
    // Check if this is a module federation error
    if (
      error.message?.includes('Loading script failed') ||
      error.message?.includes('ScriptExternalLoadError') ||
      error.message?.includes('remoteEntry.js') ||
      error.name === 'ChunkLoadError'
    ) {
      return {
        hasError: true,
        errorMessage: `Module federation error: ${error.message}`,
      };
    }

    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn(
      `Module federation error in ${this.props.moduleName || 'unknown module'}:`,
      error,
      errorInfo
    );

    // Report to monitoring service if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // Example: Google Analytics error tracking
      (window as any).gtag('event', 'exception', {
        description: `Module federation error: ${error.message}`,
        fatal: false,
      });
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex items-center justify-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="text-center">
            <h3 className="text-sm font-medium text-yellow-800 mb-2">
              Component Temporarily Unavailable
            </h3>
            <p className="text-xs text-yellow-600 mb-3">
              {this.props.moduleName ? `The ${this.props.moduleName} module` : 'A component'} failed
              to load.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-3 py-1 text-xs bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ModuleFederationErrorBoundary;
