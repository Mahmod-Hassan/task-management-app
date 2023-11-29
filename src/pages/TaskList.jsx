import TaskItem from "../components/TaskItem";

const TaskList = ({ tasks }) => {
  const tdClass = "py-2 px-4 border-r";
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-300">
            <th className={`${tdClass}`}>Toggole</th>
            <th className={`${tdClass}`}>Task</th>
            <th className={`${tdClass}`}>Description</th>
            <th className={`${tdClass}`}>Priority</th>
            <th className={`${tdClass}`}>Edit</th>
            <th className={`${tdClass}`}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
