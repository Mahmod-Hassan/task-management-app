import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskProvider";
import Button from "./Button";

const priorityLevels = ["Low", "Medium", "High"];

const Modal = ({ setModalOpen, task }) => {
  const { editTask } = useContext(TaskContext);
  const [editedTask, setEditedTask] = useState(task);
  // setter function handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editedTask, "inside handle submit");
    editTask(editedTask);
    // empty form
    setModalOpen(false);
  };
  return (
    <div className="flex justify-center items-center fixed z-50 inset-0">
      <div className="rounded-lg shadow-lg bg-white max-w-md md:w-1/2 mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-6 w-full">
          {/* Task Name field */}
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">
              Task Name
            </label>
            <input
              type="text"
              name="name"
              value={editedTask?.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Task Description field */}
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">
              Task Description
            </label>
            <textarea
              name="description"
              value={editedTask?.description}
              onChange={handleChange}
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
              name="priority"
              value={editedTask?.priority}
              onChange={handleChange}
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

          <div className="flex justify-end gap-5">
            {/* Cancel button */}
            <button
              className="bg-gray-300 p-2 rounded"
              onClick={() => setModalOpen(false)}
              classes="bg-gray-100"
            >
              Cancel
            </button>

            {/* Submit button */}
            <Button type="submit" classes="bg-blue-500">
              Save changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
