import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  // all task stored in this state
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // task add handler
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  // delete task handler
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  // toggole task complete
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

  // state and all handler
  const taskInfo = {
    tasks,
    addTask,
    toggoleComplete,
    deleteTask,
  };
  return (
    <TaskContext.Provider value={taskInfo}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
