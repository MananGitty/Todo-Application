import React, { useState, useEffect } from "react";

import "./home.css";
import Task from "./Task";

const Todo = () => {
  const startArray = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
  const [task, setTask] = useState(startArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const newArray = task.filter((item, i) => {
      return i !== index;
    });
    setTask(newArray);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="container">
      <h1>Daily Goals</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Write Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">ADD TASK !</button>
      </form>
      {task.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
};

export default Todo;
