import Counter from './Counter';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState } from '../reducers';

const App: React.FC = () => {
    const count = useSelector<CounterState, number>((state) => state.counter);
    const dispatch = useDispatch()

    return (<Counter
        value={count}
        onIncrement={() => dispatch({ type: 'INCREMENT' })}
        onDecrement={() => dispatch({ type: 'DECREMENT' })}
    />);
};

export default App;
