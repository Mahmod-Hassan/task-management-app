import { useContext } from "react";
import TaskItem from "../components/TaskItem";
import ThTag from "../components/thTag";
import { TaskContext } from "../context/TaskProvider";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-300">
            <ThTag>Toggole</ThTag>
            <ThTag>Task</ThTag>
            <ThTag>Description</ThTag>
            <ThTag>Priority</ThTag>
            <ThTag>Edit</ThTag>
            <ThTag>Delete</ThTag>
          </tr>
        </thead>
        <tbody>
          {tasks.length ? (
            tasks.map((task) => <TaskItem key={task?.id} task={task} />)
          ) : (
            <tr className="text-xl text-center">
              <td>NO task found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
