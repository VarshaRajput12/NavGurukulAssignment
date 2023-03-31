import { useState, useEffect } from "react";
import Task from "./Task";

const AddTask = () => {
  //
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Save tasks to local storage whenever they change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };
  // submit handler to add the new tasks
  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    const newTasks = {
      id: Math.floor(Math.random() * 1000),
      text: newTask,
    };
    if (!newTask.trim()) {
      return;
    }
    setTasks([...tasks, newTasks]);
    setNewTask("");
  };

  //delete handler to delete the task
  const handleTaskDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // edit handler to edit the task
  const handleTaskEdit = (id, newText) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <h1>Add Notes</h1>
      <div className="container">
        <form onSubmit={handleNewTaskSubmit} className="form">
          <input
            type="text"
            placeholder="Write a note"
            value={newTask}
            onChange={handleNewTaskChange}
          />
          <button type="submit" className="addBtn">
            Add
          </button>
        </form>
        <ul className="list">
          {tasks.map((task) => (
            <li key={task.id} className="listItem">
              <Task
                id={task.id}
                text={task.text}
                onDelete={handleTaskDelete}
                onEdit={handleTaskEdit}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTask;
