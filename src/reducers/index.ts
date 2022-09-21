import { Reducer } from "redux";

interface Action {
  type: string;
  payload?: number;
}

export interface State {
  counter: number;
}

const defaultState: State = { counter: 0 };

const incrementByReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case "INCREMENT_BY_PAYLOAD":
      return state + (action.payload ?? 0);
    default:
      return state;
  }
};

const reducer: Reducer<State, Action> = (
  state: State = defaultState,
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "INCREMENT_BY_PAYLOAD":
      return { counter: incrementByReducer(state.counter, action) };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export const incrementAction = () => ({ type: "INCREMENT" });
export const decrementAction = () => ({ type: "DECREMENT" });
export const incrementByAction = (payload: number) => ({
  type: "INCREMENT_BY_PAYLOAD",
  payload,
});

export const counterSelector = (state: State): number => state.counter;

export default reducer;
