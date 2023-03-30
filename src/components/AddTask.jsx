import React, { useState, useEffect } from "react";
import "./style.css";

const AddTask = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    const newTodos = {
      id: Math.floor(Math.random() * 1000),
      task: newTask,
    };
    e.preventDefault();
    setTasks([...tasks, newTodos]);
    setNewTask("");
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleDelete = (e) => {
    console.log(e.target.id);
    const fiterTask = tasks.filter((task) => task.id != e.target.id);
    //  console.log(fiterTask)
    setTasks(fiterTask);
  };
  return (
    <div className="container">
      <h1>Add Notes</h1>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" value={newTask} onChange={handleChange} />
        <button type="submit" className="addBtn">
          Add
        </button>
      </form>
      <ul className="list">
        {tasks.map((ele) => (
          <li key={ele.id} className="listItem">
            {ele.task}
            <div>
              <button
                id={ele.id}
                onClick={(e) => handleDelete(e)}
                className="deleteBtn"
              >
                Delete
              </button>
              <button className="editBtn">Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTask;
