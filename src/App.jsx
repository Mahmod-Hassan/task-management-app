import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/Main";
import AddTaskForm from "./pages/AddTask";
import TaskList from "./pages/TaskList";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<AddTaskForm addTask={addTask} />} />
          <Route path="/task-list" element={<TaskList tasks={tasks} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
