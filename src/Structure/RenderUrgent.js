import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { renderList } from "./components/renderList";

export function RenderUrgent(TodoList, handleDelete, handleCompleted, handleEdit) {
  const filter0 = (item) => {
    return item["priority"] === 0;
  };
  const filter1 = (item) => {
    return item["priority"] === 1;
  };
  const filter2 = (item) => {
    return item["priority"] === 2;
  };
  const filter3 = (item) => {
    return item["priority"] === 3;
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card className=" mx-auto overflow-auto" style={{ width: "100%" }}>
            <Card.Title style={{ textAlign: "center" }}>
              Urgent and Important
            </Card.Title>
            {renderList(
              TodoList.filter(filter3),
              handleDelete,
              handleCompleted,
              handleEdit
            )}
          </Card>
        </Col>
        <Col>
          <Card className=" mx-auto overflow-auto" style={{ width: "100%" }}>
            <Card.Title style={{ textAlign: "center" }}>
              Urgent and Not Important
            </Card.Title>
            {renderList(
              TodoList.filter(filter2),
              handleDelete,
              handleCompleted,
              handleEdit
            )}
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card className=" mx-auto overflow-auto" style={{ width: "100%" }}>
            <Card.Title style={{ textAlign: "center" }}>
              Not Urgent and Important
            </Card.Title>
            {renderList(
              TodoList.filter(filter1),
              handleDelete,
              handleCompleted,
              handleEdit
            )}
          </Card>
        </Col>
        <Col>
          <Card className=" mx-auto overflow-auto" style={{ width: "100%" }}>
            <Card.Title style={{ textAlign: "center" }}>
              Not Urgent and Not Important
            </Card.Title>
            {renderList(
              TodoList.filter(filter0),
              handleDelete,
              handleCompleted,
              handleEdit
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RenderUrgent;