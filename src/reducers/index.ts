import { Reducer } from 'redux';

interface Action {
    type: string;
}

const reducer: Reducer<number, Action> = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}

export default reducer;
