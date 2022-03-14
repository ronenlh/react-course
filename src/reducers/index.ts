import { Reducer } from 'redux';

export interface CounterAction {
    type: string;
}

export interface CounterState {
    counter: number;
}

const initialState: CounterState = {
    counter: 0
};

const reducer: Reducer<CounterState, CounterAction> = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1};
        case 'DECREMENT':
            return { counter: state.counter - 1};
        default:
            return state;
    }
};

export default reducer;
