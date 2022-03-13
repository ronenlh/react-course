import React from 'react';

interface RouteProps {
    path: string;
    element: JSX.Element
}

const Route: React.FC<RouteProps> = ({ path, element }) => {
    const pathname = window.location.pathname;
    if (pathname.match(path)) {
        return element;
    } else {
        return null;
    }
};

export default Route;
