export const deleteTask = (tasks, setTasks, taskId) => {
  const onlyWantedTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(onlyWantedTasks);
};
