import React, { useState, useEffect } from "react";
import "./App.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [timerID, setTimerID] = useState<number>();

  useEffect(() => {
    setTimerID(window.setInterval(() => setDate(new Date()), 1_000));

    return () => window.clearInterval(timerID);
  }, [timerID]);

    return (
      <div>
        <h1>
        {date.toLocaleTimeString()}
        </h1>
      </div>
    );
}

export default Clock;
