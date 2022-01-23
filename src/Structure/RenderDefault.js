import React from "react";
import { Card } from "react-bootstrap";
import { renderList } from "./components/renderList";

export function RenderDefault(TodoList, handleDelete, handleCompleted, handleEdit) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Title style={{ textAlign: "center" }}>Task to do</Card.Title>
      {renderList(TodoList, handleDelete, handleCompleted, handleEdit)}
    </Card>
  );
}
export default RenderDefault;