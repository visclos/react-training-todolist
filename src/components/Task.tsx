import React from "react";
import "./Task.css";
import { TaskType } from '../models/Task';
import App from "../App";


type TaskProps = {
  task : TaskType,
  deleteTask : (taskId: number) => void
  editTask : (taskId : number) => void
  updateTaskState : (taskId : number) => void
};

export const Task = ({task,deleteTask , editTask, updateTaskState}: TaskProps) => {
  return (
    
    <div className="task-container">
      <div className="task-content">
        <label className="container">
          <input onChange={() =>updateTaskState(task.id) } type="checkbox" checked={task.done} />
          <span  className="checkmark"></span>
        </label>
        <p>{ task.title }</p>
      </div>
      <div className="task-actions">
        <button onClick={() => editTask(task.id)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
    
  );
};
