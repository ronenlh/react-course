import React from 'react';
import { BrowserHistory, createBrowserHistory } from 'history';

const history: BrowserHistory = createBrowserHistory();

interface LinkProps {
    to: string;
    onClick: () => void;
}

const Link: React.FC<LinkProps> = ({ to, onClick, children }) => {
    return <a
        href={to}
        onClick={(e) => {
            e.preventDefault();
            history.push(to);
            onClick();
        }}
    >{children}</a>;
};

export default Link;
