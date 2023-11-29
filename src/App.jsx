import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/Main";
import AddTask from "./pages/AddTask";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<AddTask />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
