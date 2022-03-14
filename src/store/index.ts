import { createSlice, configureStore, Draft } from '@reduxjs/toolkit'

export interface CounterAction {
    type: string;
}

export interface CounterState {
    counter: number;
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({
    reducer: counterSlice.reducer
});
