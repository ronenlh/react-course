import React, { createRef } from "react";
import "./App.css";

const App = () => {
  const inputRef = createRef<HTMLInputElement>();

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
