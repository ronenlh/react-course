interface CounterProps {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ value, onIncrement, onDecrement }) => {
    return (<>
        <p>
            Clicked: {value} times
        </p>
        <button onClick={() => onIncrement()}>+</button>
        <button onClick={() => onDecrement()}>-</button>
    </>);
}

export default Counter;
