import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [taskArr, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8080/tasks");
    const data = await res.json();

    return data;
  };
  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8080/tasks/${id}`);
    const data = await res.json();

    return data;
  };
  //Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:8080/tasks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = {
    //   id: id,
    //   ...task,
    // };

    setTasks([...taskArr, data]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(taskArr.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const upTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upTask),
    });

    const data = await res.json();
    setTasks(
      taskArr.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="ToDo List React"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        ></Header>
        {showAddTask && <AddTask onAdds={addTask}></AddTask>}
        {taskArr.length > 0 ? (
          <Tasks
            tasks={taskArr}
            action={deleteTask}
            onToggle={toggleReminder}
          ></Tasks>
        ) : (
          "No Tasks Added"
        )}
        {/* Routing */}
        {/* <Route
          path="/"
          exact
          render={(props) => {
            <>
              {showAddTask && <AddTask onAdds={addTask}></AddTask>}
              {taskArr.length > 0 ? (
                <Tasks
                  tasks={taskArr}
                  action={deleteTask}
                  onToggle={toggleReminder}
                ></Tasks>
              ) : (
                "No Tasks Added"
              )}
            </>;
          }}
        />
        <Route path="/about" component={About} /> */}
        <Footer></Footer>
      </div>
    </Router>
  );
}

//Classes
// class App extends React.Component {
//   render() {
//     return <h1>Hello From a class App</h1>;
//   }
// }

export default App;
