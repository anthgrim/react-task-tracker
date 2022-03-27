import { FaTimes } from "react-icons/fa";

const Task = ({ task, action, onToggle }) => {
  const xStyling = {
    color: "#1e6091",
    cursor: "pointer",
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes style={xStyling} onClick={() => action(task.id)}></FaTimes>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
