import { useContext, useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import TdTag from "../../components/tdTag";
import { TaskContext } from "../../context/TaskProvider";

const TaskItem = ({ task }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { id, name, description, priority, completed } = task;
  const { toggoleComplete, deleteTask } = useContext(TaskContext);

  return (
    <>
      <tr className={`border-t ${completed ? "line-through" : "none"}`}>
        <TdTag>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
            onClick={() => toggoleComplete(id)}
          />
        </TdTag>
        <TdTag>{name}</TdTag>
        <TdTag>{description}</TdTag>
        <TdTag>{priority}</TdTag>
        <TdTag>
          <Button onClick={() => setModalOpen(true)} bgColor="bg-blue-500">
            Edit
          </Button>
        </TdTag>
        <TdTag>
          <Button onClick={() => deleteTask(id)} bgColor="bg-red-500">
            Delete
          </Button>
        </TdTag>
      </tr>
      {modalOpen && <Modal setModalOpen={setModalOpen} task={task} />}
    </>
  );
};

export default TaskItem;
