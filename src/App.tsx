import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        alert("A name was submitted: " + inputRef.current?.value);
        event.preventDefault();
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          ref={inputRef}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default App;
