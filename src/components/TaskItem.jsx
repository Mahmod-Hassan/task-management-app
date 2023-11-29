import Button from "./Button";

const TaskItem = ({ task }) => {
  const { name, description, priority } = task;
  return (
    <div className="container flex justify-between items-center mx-auto border-b border-2">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />{" "}
      |<h2>{name}</h2> |<p>{description}</p> |
      <p className="py-2 px-4">{priority}</p>
      <Button classes="bg-blue-500 ">Edit</Button>
      <Button classes="bg-red-500">Delete</Button>
    </div>
  );
};

export default TaskItem;
