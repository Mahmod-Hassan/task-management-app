import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/Main";
import AddTaskForm from "./pages/AddTask";
import TaskList from "./pages/TaskList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route element={<AddTaskForm />} />
          <Route path="task-list" element={<TaskList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
