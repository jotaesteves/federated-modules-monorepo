import * as React from 'react';
export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps);
  static getDerivedStateFromError(error: Error): ErrorBoundaryState;
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
  handleReset: () => void;
  render():
    | string
    | number
    | bigint
    | boolean
    | import('react/jsx-runtime').JSX.Element
    | Iterable<React.ReactNode>
    | Promise<
        | string
        | number
        | bigint
        | boolean
        | React.ReactPortal
        | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | null
        | undefined
      >
    | null
    | undefined;
}
export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.d.ts.map
