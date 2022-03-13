import { Component, ErrorInfo } from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<any, ErrorBoundaryState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        console.debug({ error });
        return {
            hasError: true
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo ) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Whoops</h1>;
        }

        return this.props.children;
    }

}
