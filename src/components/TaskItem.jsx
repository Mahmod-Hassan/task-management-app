import Button from "./Button";

const TaskItem = ({ task }) => {
  const { name, description, priority } = task;
  return (
    <tr className="border-b">
      <td className="py-2 px-4">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500"
        />
      </td>

      <td className="py-2 px-4">{name}</td>
      <td className="py-2 px-4">{description}</td>
      <td className="py-2 px-4">{priority}</td>

      <td className="py-2 px-4">
        <Button classes="bg-blue-500 ">Edit</Button>
      </td>

      <td className="py-2 px-4">
        <Button classes="bg-red-500">Delete</Button>
      </td>
    </tr>
  );
};

export default TaskItem;
