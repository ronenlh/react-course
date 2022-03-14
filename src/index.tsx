import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import { createStore } from 'redux';
import reducer from './reducers';


const store = createStore(
    reducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

const root = document.getElementById('root');
const render = () => ReactDOM.render(<Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
/>, root);

render();
store.subscribe(render);
