import React, { useState } from "react";
import styles from "./App.module.css";

export const sum = (a: number, b: number) => {
  return a + b;
};

export const foo = (str: string) => {
  return {
    name: str.toUpperCase() + '!'
  };
};

const App = () => {
  const [name, setName] = useState("");

  return (
    <div className={styles.contactUs}>
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
        <input className={styles.submit} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
