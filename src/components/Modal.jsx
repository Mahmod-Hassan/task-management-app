import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskProvider";
import Button from "./Button";
import Form from "./Form";
import Select from "./Select";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

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
    editTask(editedTask);
    // empty form
    setModalOpen(false);
  };
  return (
    <div className="flex justify-center items-center fixed z-50 inset-0">
      <div className="rounded-lg shadow-lg bg-white max-w-md md:w-1/2 mx-auto">
        <Form onSubmit={handleSubmit}>
          {/* Task Name field */}

          <TextInput
            label="Task Name"
            type="text"
            name="name"
            value={editedTask?.name}
            onChange={handleChange}
          />
          <TextArea
            label="Task Description"
            type="text"
            name="description"
            value={editedTask?.description}
            onChange={handleChange}
          />
          <Select
            name="priority"
            value={editedTask?.priority}
            onChange={handleChange}
          />

          {/* Submit button */}
          <div className="flex justify-end gap-5">
            <Button bgColor="bg-gray-500" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" bgColor="bg-blue-500">
              Save changes
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Modal;
