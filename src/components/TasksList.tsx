import React, { useEffect, useState } from "react";
import { Task } from "./Task";
import { TaskType } from '../models/Task';

import "./TasksList.css";
import { data } from "../data/tasks";
import { TaskFormModal } from "./TaskFormModal";
import App from "../App";


type TaskListProps ={
    tasks : TaskType[]
    deleteTask : (taskId: number) => void
    editTask : (taskId: number) => void
    updateTaskState : (tasId: number) => void
}

// const tasks = data;

type TaskProps = {
    task : TaskType,
  };
  

export const TaskList = ({tasks, deleteTask, editTask, updateTaskState}: TaskListProps) => {
    return (
        <>
            {
                tasks.map((task: TaskType) => <Task deleteTask={deleteTask} key={task.id} task={task} editTask={editTask} updateTaskState={updateTaskState}/>)
            }
        </>
    );
};