import React from "react";
import "./Header.css";
import { Task } from "./Task";
import { TaskFormModal } from "./TaskFormModal";
import { data } from "../data/tasks";
import App from "../App";

type TitleProps = {
  title: string; // Prop pour stocker le title
};

export function Header({ title }: TitleProps) {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}









