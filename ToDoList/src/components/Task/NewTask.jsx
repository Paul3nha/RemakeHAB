import PropTypes from "prop-types";
import { useState } from "react";
export const NewTask = ({ tasks, setTasks }) => {
  const [taskInput, setTaskInput] = useState("");

  const addTask = (addingTask) => {
    const addingTaskObject = {
      id: tasks.length + 1,
      task: addingTask,
      done: false,
    };
    setTasks([...tasks, addingTaskObject]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  return (
    <div>
      <h2>Add a new task to the list 📚 </h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={taskInput}
            onChange={handleInputChange}
            maxLength={100}
          />
        </label>
        <button>➕</button>
      </form>
    </div>
  );
};

NewTask.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};
