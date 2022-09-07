import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root')!);

export const ThemeContext = createContext<'light' | 'dark'>('dark')

root.render(
    <ThemeContext.Provider value={'light'}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeContext.Provider>);

registerServiceWorker();