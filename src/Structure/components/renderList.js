import React from "react";
import Task from "./Task.js";

export function renderList(TodoList, handleDelete, handleCompleted, handleEdit) {
  const data = Array.from(TodoList);
  return data.map((item) => (
    <Task
      item={item}
      handleDelete={handleDelete}
      handleCompleted={handleCompleted}
      handleEdit= {handleEdit}
      key={item._id}
    ></Task>
  ));
}
