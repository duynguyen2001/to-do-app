import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { renderList } from "./components/renderList";

export function RenderKanban(TodoList, handleDelete, handleCompleted, handleEdit) {
  const filterNotStarted = (item) => {
    return item["completed"] === "N";
  };
  const filterInProgress = (item) => {
    return item["completed"] === "P";
  };
  const filterFinished = (item) => {
    return item["completed"] === "F";
  };
  return (
    <Row>
      <Col>
        <Card className=" mx-auto overflow-auto" style={{ width: "100%" }}>
          <Card.Title style={{ textAlign: "center" }}>Not Started</Card.Title>
          {renderList(
            TodoList.filter(filterNotStarted),
            handleDelete,
            handleCompleted,
            handleEdit
          )}
        </Card>
      </Col>
      <Col>
        <Card className=" mx-auto overflow-auto" style={{ width: "100%" }}>
          <Card.Title style={{ textAlign: "center" }}>In Progress</Card.Title>
          {renderList(
            TodoList.filter(filterInProgress),
            handleDelete,
            handleCompleted,
            handleEdit
          )}
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto overflow-auto" style={{ width: "100%" }}>
          <Card.Title style={{ textAlign: "center" }}>Finished</Card.Title>
          {renderList(
            TodoList.filter(filterFinished),
            handleDelete,
            handleCompleted,
            handleEdit
          )}
        </Card>
      </Col>
    </Row>
  );
}
export default RenderKanban;
