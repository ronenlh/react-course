import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
import AuthContextProvider from './context/auth-context';

it('renders correctly', () => {
    const app = renderer.create(<App />);

    const tree = app.toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly with AuthContextProvider', () => {
    const app = renderer.create(<AuthContextProvider>
        <App />
    </AuthContextProvider>);

    const tree = app.toJSON();
    expect(tree).toMatchSnapshot();
});
