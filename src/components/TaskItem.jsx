import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskProvider";
import Button from "./Button";
import Modal from "./Modal";

const TaskItem = ({ task }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { id, name, description, priority, completed } = task;
  const { toggoleComplete, deleteTask } = useContext(TaskContext);
  const tdClass = "py-2 px-4 border-r";
  return (
    <>
      <tr className={`border-t ${completed ? "line-through" : "none"}`}>
        <td className={`${tdClass}`}>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
            onClick={() => toggoleComplete(id)}
          />
        </td>
        <td className={`${tdClass}`}>{name}</td>
        <td className={`${tdClass}`}>{description}</td>
        <td className={`${tdClass}`}>{priority}</td>
        <td className={`${tdClass}`}>
          <Button onClick={() => setModalOpen(true)} classes="bg-blue-500">
            Edit
          </Button>
        </td>
        <td className={`${tdClass}`}>
          <Button onClick={() => deleteTask(id)} classes="bg-red-500">
            Delete
          </Button>
        </td>
      </tr>
      {modalOpen && <Modal setModalOpen={setModalOpen} task={task} />}
    </>
  );
};

export default TaskItem;
