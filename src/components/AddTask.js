import { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ onAdds }) => {
  //Default Values
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  //On Submit Function
  const onSubmits = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add the task");
      return;
    }

    onAdds({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);

    alert("Task has been added succesfully");
  };

  return (
    <form className="add-form" onSubmit={onSubmits}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

AddTask.propTypes = {
  onAdds: PropTypes.func,
};

export default AddTask;
