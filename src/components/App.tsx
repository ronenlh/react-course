import Counter from './Counter';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, decrement, increment } from '../store';

const App: React.FC = () => {
    const count = useSelector<CounterState, number>((state) => state.counter);
    const dispatch = useDispatch()

    return (<Counter
        value={count}
        onIncrement={() => dispatch(increment())}
        onDecrement={() => dispatch(decrement())}
    />);
};

export default App;
