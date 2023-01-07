import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";

// 1- Replace the hardocded app title with the const "title"
// 2- Create a Header component in the components file and replace the
// header div with the Header component.
// 3- Pass the Header component the const "title" as prop

// Create an interface Task in the model folder that will 
// Later on you can transform this interface to a class with its own methods

// App.tsx should not have the responsibility to iterate over the tasks.
// Create an intermediate component that does that and display each task using the Task
// component.

// The task modal is rendered in the App.tsx.
// Which means that initial values is empty when the component is rendered...
// use a react hook in the modal to make the component listen to the changes of initial values

const App = () => {
  const title = "To do list";
  let taskToEdit: any = null;

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
