import { useReducer } from "react";
import { addAction, numReducer, substractAction, addNumAction } from "./reducer";


const Calculator = () => {
    const [accumulator, dispatch] = useReducer(numReducer, 0);

    return <>
        <h1>{accumulator}</h1>
        <button onClick={() => dispatch(addAction())}>++</button>
        <button onClick={() => dispatch(substractAction())}>--</button>
        <button onClick={() => dispatch(addNumAction(2))}>+2</button>
        <button onClick={() => dispatch(addNumAction(3))}>+3</button>
    </>
};

export default Calculator;