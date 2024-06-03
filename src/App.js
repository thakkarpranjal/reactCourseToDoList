import React, { useState } from "react";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>To do List</h1>
      <div className="todo-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>+</button>
      </div>

      <div className="todo-list-container">
        {tasks.map((task, index) => (
          <div key={index} className="todo-list">
            <p>{task}</p>
            <div className="actions">
              <input type="checkbox" />
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
