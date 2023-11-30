import { useContext, useState } from "react";
import Form from "../components/Form";
import Select from "../components/Select";
import TextArea from "../components/TextArea";
import TextInput from "../components/TextInput";
import { TaskContext } from "../context/TaskProvider";
const AddTaskForm = () => {
  const { addTask } = useContext(TaskContext);
  // State to manage form values
  const [task, setTask] = useState({
    name: "",
    description: "",
    priority: "low",
  });

  // setter function handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now(), completed: false });
    // empty form
    setTask({ name: "", description: "", priority: "low" });
  };

  return (
    <div className="container mx-auto mt-8">
      <Form onSubmit={handleSubmit}>
        {/* Task Name field */}

        <TextInput
          label="Task Name"
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
        />
        <TextArea
          label="Task Description"
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
        <Select name="priority" value={task.priority} onChange={handleChange} />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default AddTaskForm;
