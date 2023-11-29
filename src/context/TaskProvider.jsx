import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const toggoleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const taskInfo = {
    tasks,
    addTask,
    toggoleComplete,
  };
  return (
    <TaskContext.Provider value={taskInfo}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
