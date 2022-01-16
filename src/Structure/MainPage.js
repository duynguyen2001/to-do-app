import React, { useState, useEffect } from "react";
import { Create, Read, Update, Delete } from "./components/CRUD.js";
import ViewMode from "./components/ViewMode.js";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  Stack,
  Modal,
} from "react-bootstrap";
import { TaskForm } from "./components/TaskForm";
import { renderList } from "./components/renderList";

const MainPage = (props) => {
  const [TodoList, setTodoList] = useState([]);
  const [display, setDisplay] = useState("Normal");
  const [writtenTask, setWrittenTask] = useState("");
  const [writtenDescription, setWrittenDescription] = useState("");
  //Load the List right after load page
  useEffect(() => Read(setTodoList));

  /*Changing cards handler*/
  // get data from the task data
  const onChangeForm = (event) => {
    setWrittenTask(event.target.value);
  };
  //
  const refreshList = () => {
    Read(setTodoList);
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    Create(writtenTask, writtenDescription, refreshList);
    setWrittenTask("");
    setWrittenDescription("");
  };
  const handleDelete = (item) => {
    Delete(item, refreshList);
  };
  const handleCompleted = (item) => {
    const dataChange = {
      title: item.title,
      description: item.description,
      completed:
        item.completed === "N" ? "P" : item.completed === "P" ? "F" : "N",
    };
    Update(item, dataChange, refreshList);
  };

  const filterNotStarted = (item) => {
    return item["completed"] === "N";
  };
  const filterInProgress = (item) => {
    return item["completed"] === "P";
  };
  const filterFinished = (item) => {
    return item["completed"] === "F";
  };
  if (display === "Kanban") {
    return (
      <Container fluid="md" gap={3}>
        <Row>
          <Col xs={12}>
            <TaskForm
              writtenTask={writtenTask}
              onChangeForm={onChangeForm}
              onSubmitForm={onSubmitForm}
            ></TaskForm>
            <Stack direction="horizontal" className="col-sm-2 mx-auto" gap={3}>
              <ViewMode setDisplay={setDisplay}></ViewMode>
              <Button onClick={refreshList}>Refresh</Button>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className=" mx-auto overflow-auto" style={{ width: "100%" }}>
              <Card.Title style={{ textAlign: "center" }}>
                Not Started
              </Card.Title>
              {renderList(
                TodoList.filter(filterNotStarted),
                handleDelete,
                handleCompleted
              )}
            </Card>
          </Col>
          <Col>
            <Card className=" mx-auto overflow-auto" style={{ width: "100%" }}>
              <Card.Title style={{ textAlign: "center" }}>
                In Progress
              </Card.Title>
              {renderList(
                TodoList.filter(filterInProgress),
                handleDelete,
                handleCompleted
              )}
            </Card>
          </Col>
          <Col>
            <Card className="mx-auto overflow-auto" style={{ width: "100%" }}>
              <Card.Title style={{ textAlign: "center" }}>Finished</Card.Title>
              {renderList(
                TodoList.filter(filterFinished),
                handleDelete,
                handleCompleted
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container fluid="md" gap={3}>
      <Row>
        <Col xs={12}>
          <TaskForm
            writtenTask={writtenTask}
            onChangeForm={onChangeForm}
            onSubmitForm={onSubmitForm}
          ></TaskForm>
          <Stack direction="horizontal" className="col-sm-2 mx-auto" gap={3}>
            <ViewMode setDisplay={setDisplay}></ViewMode>
            <Button onClick={refreshList}>Refresh</Button>
          </Stack>
        </Col>
      </Row>
      <Row gap={5}></Row>
      <Card style={{ width: "100%" }}>
        <Card.Title style={{ textAlign: "center" }}>Task to do</Card.Title>
        {renderList(TodoList, handleDelete, handleCompleted)}
      </Card>
    </Container>
  );
};

export default MainPage;
