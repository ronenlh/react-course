import Counter from './Counter';
import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterAction, CounterState } from '../reducers';

const App: React.FC = () => {
    const count = useSelector<CounterState, number>((state) => state.counter);
    const dispatch = useDispatch<Dispatch<CounterAction>>()

    return (<Counter
        value={count}
        onIncrement={() => dispatch({ type: 'INCREMENT' })}
        onDecrement={() => dispatch({ type: 'DECREMENT' })}
    />);
};

export default App;
