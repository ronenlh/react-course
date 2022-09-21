import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import { createStore } from "redux";
import reducer, { incrementAction, decrementAction, incrementByAction, counterSelector } from "./reducers";

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root")!);
const render = () =>
  root.render(
    <Counter
      value={counterSelector(store.getState())}
      onIncrement={() => store.dispatch(incrementAction())}
      onDecrement={() => store.dispatch(decrementAction())}
      onIncrementBy={() => store.dispatch(incrementByAction(2))}
    />
  );

render();
store.subscribe(render);
