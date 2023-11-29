import { useState } from "react";

// Define the priority levels
const priorityLevels = ["Low", "Medium", "High"];

const AddTaskForm = () => {
  // State to manage form values
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form data (you can send it to an API or perform other actions)
    console.log("Task Name:", taskName);
    console.log("Task Description:", taskDescription);
    console.log("Priority:", priority);

    // Reset form fields
    // setTaskName('');
    // setTaskDescription('');
    // setPriority('');
  };
  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
      >
        {/* Task Name field */}
        <div className="mb-4">
          <label
            htmlFor="taskName"
            className="block text-gray-600 font-semibold mb-2"
          >
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Task Description field */}
        <div className="mb-4">
          <label
            htmlFor="taskDescription"
            className="block text-gray-600 font-semibold mb-2"
          >
            Task Description
          </label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Priority Level dropdown */}
        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-gray-600 font-semibold mb-2"
          >
            Priority Level
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>
              Select priority level
            </option>
            {priorityLevels.map((level) => (
              <option key={level} value={level.toLowerCase()}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
