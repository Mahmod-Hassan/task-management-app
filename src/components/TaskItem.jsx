import Button from "./Button";

const TaskItem = ({ task }) => {
  const { id, name, description, priority, completed } = task;
  const tdClass = "py-2 px-4 border-r";
  return (
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
        <Button classes="bg-blue-500">Edit</Button>
      </td>
      <td className={`${tdClass}`}>
        <Button classes="bg-red-500">Delete</Button>
      </td>
    </tr>
  );
};

export default TaskItem;
