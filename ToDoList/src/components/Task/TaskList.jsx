import PropTypes from "prop-types";
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
        </li>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};
