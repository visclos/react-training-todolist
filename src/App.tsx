import React from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";

const App = () => {
  const title = "To do list";
  const tasks = data;
  const taskToEdit: any = null;

  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addNewTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    console.error("I need to be implemented");
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const deleteTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  return (
    <div className="main">
      <div className="header">
        <h1>Replace me using the title const</h1>
      </div>
      <Task />
      <button
        className="add-task-btn"
        onClick={() => console.log("this button should open the modal")}
      >
        +
      </button>
      <TaskFormModal
        show={false}
        handleClose={() =>
          console.log("pass me a method that will close the modal")
        }
        addNewTask={addNewTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
