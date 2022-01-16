import React from "react";
import Task from "./Task.js";

export function renderList(TodoList, handleDelete, handleCompleted) {
  return TodoList.map((item) => (
    <Task
      item={item}
      handleDelete={handleDelete}
      handleCompleted={handleCompleted}
      key={item.id}
    ></Task>
  ));
}
