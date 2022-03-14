import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import reducer from './reducers';

const createStore = (reducer: any) => {
    let state = reducer(undefined, {});
    let listeners: (() => void)[] = [];

    const getState = () => state;

    const dispatch = (action: any) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };

    const subscribe = (listener: () => void) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    return { getState, subscribe, dispatch };
};

const store = createStore(reducer);

const root = document.getElementById('root');
const render = () => ReactDOM.render(<Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
/>, root);

render();
store.subscribe(render);
