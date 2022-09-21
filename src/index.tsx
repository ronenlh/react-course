import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/Counter';
import { createStore } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
    reducer,
    composeWithDevTools()
    );

const root = ReactDOM.createRoot(document.getElementById('root')!);
const render = () => root.render(<Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
/>);

render();
store.subscribe(render);
