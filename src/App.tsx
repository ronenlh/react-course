import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(event) => {
        alert("A name was submitted: " + name);
        event.preventDefault();
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target?.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default App;
