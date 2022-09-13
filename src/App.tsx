import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div className="contact-us">
      <form
        onSubmit={(event) => {
          alert("A name was submitted: " + name);
          event.preventDefault();
        }}
      >
        <label>
          NAME: <em>*</em>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target?.value)}
          />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
