import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

const root = document.getElementById('root');
const render = () => ReactDOM.render(<Counter
    value={0}
    onIncrement={() => console.log('increment')}
    onDecrement={() => console.log('decrement')}
/>, root);

render();
