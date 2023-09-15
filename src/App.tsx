import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header } from "./components/Header";
import { TaskList } from "./components/TasksList";
import { TaskType } from "./models/Task";

export const App = () => {
  const title = "To do list";
  const [tasks, setTasks] = useState(data);
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null>(null);


  const updateTaskState = (taskId: number) => {
    //je récupére l id de la sélection
    //je stock l'information dans un tableau que je renvoie avec la nouvelle valeur 
    console.log(taskId)


    const modifiedTask = tasks.map((task) => {
      if (task.id == taskId){
        return {
          ...task,
          done : !task.done
        }
      }else{
        return task
      }
      

    });
    setTasks(modifiedTask);
   

  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newTitle = formData.get("title") as string;
    const nexDescription = formData.get("description") as string;

    if (!taskToEditId) {
      const ids = tasks.map((task: TaskType) => task.id);
      const newTasks = {


        id: Math.max(...ids) + 1,
        title: newTitle,
        description: nexDescription,
        done: false
      }
      setTasks([...tasks, newTasks])
    } else {
      const updatedTask = [...tasks];
      const index = updatedTask.findIndex((element) => taskToEditId == element.id);
      updatedTask[index].description = nexDescription;
      updatedTask[index].title = newTitle;

      setTasks(updatedTask);

    }


    form.reset();
    setTaskToEdit(null)
    setShow(false);
    setKey(key + 1);
  };

  // const [taskSelect, setTaskSelect] = useState(data);

  const editTask = (taskId: number) => {

    const selectTask = tasks.find((element) => taskId == element.id);
    if (selectTask == undefined) {
      return;
    }

    console.log(selectTask)
    setTaskToEdit(selectTask);
    setShow(true);
    setKey(key + 1);
    return taskId;
  };

  const deleteTask = (taskId: number) => {
    const filterArray = tasks.filter((task) => task.id != taskId);
    setTasks(filterArray);

  };

  const [show, setShow] = useState(false);
  const [key, setKey] = useState(0);


  return (
    <div className="main">
      <div className="header">
        <Header title={title} />

      </div>

      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} updateTaskState={updateTaskState} />
      <button
        className="add-task-btn"
        onClick={() => setShow(true)}
      >
        +
      </button>
      <TaskFormModal
        key={key}
        show={show}
        handleClose={() => { setShow(false); setKey(key + 1) }}
        addOrEditTask={addOrEditTask}
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
