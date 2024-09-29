import PropTypes from "prop-types";
import { deleteTask } from "../../helpers/deleteTask.js";

export const TaskList = ({ tasks, setTasks }) => {
  const isDone = (id) => {
    setTasks(
      tasks.map((tsk) => (tsk.id === id ? { ...tsk, done: !tsk.done } : tsk))
    );
  };

  return (
    <ul>
      {tasks.map((tsk) => (
        <li
          key={tsk.id}
          style={{
            textDecoration: tsk.done ? "line-through" : "none",
            listStyle: "none",
          }}
        >
          <input
            type="checkbox"
            checked={tsk.done}
            onChange={() => isDone(tsk.id)}
          />
          {tsk.task}
          <button onClick={() => deleteTask(tasks, setTasks, tsk.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};
