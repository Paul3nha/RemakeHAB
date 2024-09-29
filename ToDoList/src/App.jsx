import { useState } from "react";
import "./App.css";
import { TaskList } from "./components/Task/TaskList.jsx";
import { NewTask } from "./components/Task/NewTask.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Go to the mall", done: false },
    { id: 2, task: "Do my React exercices", done: true },
  ]);

  return (
    <>
      <h1>To Do List ✏️</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <NewTask task={tasks} setTasks={setTasks} />
      <div></div>
    </>
  );
}

export default App;
