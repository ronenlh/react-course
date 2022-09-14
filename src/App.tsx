import React, { useState, useEffect } from "react";
import "./App.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = window.setInterval(() => setDate(new Date()), 1_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div>
      <h1>
        {date.toLocaleTimeString()}
      </h1>
    </div>
  );
};

export default Clock;
