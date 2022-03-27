import Task from "./TaskC";

const Tasks = ({ tasks, action, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          action={action}
          onToggle={onToggle}
        ></Task>
      ))}
    </>
  );
};

export default Tasks;
