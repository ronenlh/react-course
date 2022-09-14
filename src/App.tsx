import React, { useState, useEffect, useTransition } from "react";
import "./App.css";

const Clock = () => {
  const [isPending, startTransition] = useTransition();
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setDate(new Date()), 1_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div>
      <h1>
        <button
          onClick={() => {
            startTransition(() => {
              setCount((previousCount) => previousCount + 1);
            });
          }}
        >
          Count: {count}
        </button>
        {date.toLocaleTimeString()}
      </h1>
      {isPending && <h2>waiting...</h2>}
    </div>
  );
};

export default Clock;
