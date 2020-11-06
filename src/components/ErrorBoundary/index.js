import React from 'react';

class ErrorBoundary extends React.Component {
    constructor (props) {
        super();
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;;
    }
}

export default ErrorBoundary;