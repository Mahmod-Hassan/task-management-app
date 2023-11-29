import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  // all task stored in this state
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // task add handler
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // task edit
  const editTask = (editedTask) => {
    const updatedTasks = tasks.map((task) => {
      return task?.id == editedTask?.id ? editedTask : task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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

  // state and all handler
  const taskInfo = {
    tasks,
    addTask,
    toggoleComplete,
    deleteTask,
    editTask,
  };
  return (
    <TaskContext.Provider value={taskInfo}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
