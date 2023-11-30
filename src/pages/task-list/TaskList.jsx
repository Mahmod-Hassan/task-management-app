import { useContext, useState } from "react";
import ThTag from "../../components/thTag";
import { TaskContext } from "../../context/TaskProvider";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [priority, setPriority] = useState(0);

  let content = null;

  const sortedByPriority = (a, b) => {
    if (priority === "low") {
      const priorityOrder = { low: 1, medium: 2, high: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else if (priority === "medium") {
      const priorityOrder = { low: 2, medium: 1, high: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else if (priority === "high") {
      const priorityOrder = { low: 3, medium: 2, high: 1 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else {
      // No sorting when priority is not selected
      return 0;
    }
  };
  if (tasks.length) {
    const sortedTasks = tasks.slice().sort(sortedByPriority);

    content = sortedTasks.map((task) => (
      <TaskItem key={task?.id} task={task} />
    ));
  } else {
    content = (
      <tr>
        <td>Task Not Found</td>
      </tr>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <select
        onChange={(e) => setPriority(e.target.value)}
        name="priority"
        className="my-8 w-[100px] border-2 border-gray-900"
      >
        <option value={0}>none</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
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
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default TaskList;
