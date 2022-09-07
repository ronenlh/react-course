import React from 'react';

interface MyErrorBoundaryProps {
    fallback: React.ReactNode;
    children: React.ReactNode;
}

interface MyErrorBoundaryState {
    hasError: boolean;
}

export default class MyErrorBoundary extends React.Component<MyErrorBoundaryProps, MyErrorBoundaryState> {
    constructor(props: MyErrorBoundaryProps) {
        super(props);

        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}