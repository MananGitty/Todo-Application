import React, { useState } from "react";

const Todo = () => {
  const [interval, setInterval] = useState(0);
  console.log(interval);
  const btnStyle = {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "black",
    color: "white",
    margin: 10,
  };

  const increment = () => {
    setInterval(interval + 1);
    console.log(interval);
  };
  const decrement = () => {
    setInterval(interval - 1);
    console.log(interval);
  };
  const changeHandler = (e) => {
    interval = e.target.value;
    console.log(interval);
  };
  return (
    <div className="App">
      <h1>Hello World</h1>
      <input
        type="text"
        placeholder="Enter "
        onChange={changeHandler}
        value={interval}
      />
      <button style={btnStyle} onClick={increment}>
        +
      </button>
      <button style={btnStyle} onClick={decrement}>
        -
      </button>
    </div>
  );
};
export default Todo;
