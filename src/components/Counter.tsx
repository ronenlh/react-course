interface CounterProps {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onIncrementBy: () => void;
}

const Counter: React.FC<CounterProps> = ({ value, onIncrement, onDecrement, onIncrementBy }) => {
    return (<>
        <p>
            Clicked: {value} times
        </p>
        <button onClick={() => onIncrement()}>+</button>
        <button onClick={() => onDecrement()}>-</button>
        <button onClick={() => onIncrementBy()}>+2</button>
    </>);
}

export default Counter;
