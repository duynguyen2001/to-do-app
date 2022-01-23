import React, { useState, useEffect } from "react";
import { Create, Read, Update, Delete } from "./components/CRUD.js";
import ViewMode from "./components/ViewMode.js";
import SortingMode from "./components/SortingMode";
import { Card, Col, Container, Row, Button, Stack } from "react-bootstrap";
import { TaskForm } from "./components/TaskForm";
import { renderList } from "./components/renderList";
import { RenderDefault } from "./RenderDefault";

const MainPage = (props) => {
  const [TodoList, setTodoList] = useState([]);
  const [display, setDisplay] = useState("Normal");
  const [writtenTask, setWrittenTask] = useState("");
  const [writtenDescription, setWrittenDescription] = useState("");
  const [sortingOption, setSortingOption] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState(0);
  //Load the List right after load page
  useEffect(() => Read(setTodoList, sortingOption), [sortingOption]);

  /*Changing cards handler*/
  // get data from the task data
  const onChangeForm = (event) => {
    setWrittenTask(event.target.value);
  };
  const onChangeDescription = (event) => {
    setWrittenDescription(event.target.value);
  };
  const onChangeDeadline = (event) => {
    setDeadline(event.target.value);
  };
  const onChangePriority = (event) => {
    setPriority(event.target.value);
  };
  const refreshList = () => {
    Read(setTodoList, sortingOption);
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    const newObject = {
      title: writtenTask,
      description:
        writtenDescription === ""
          ? "No description has been added"
          : writtenDescription,
      completed: "N",
      priority: priority,
      date: deadline === "" ? null : new Date(deadline).toISOString(),
    };
    if (writtenTask !== "") Create(newObject, refreshList);
    setWrittenTask("");
    setWrittenDescription("");
    setDeadline("");
    setPriority(0);
  };
  const handleDelete = (item) => {
    Delete(item, refreshList);
  };
  const handleEdit = (item, dataChange) => {
    Update(item.id, dataChange, refreshList);
  };
  const handleCompleted = (item) => {
    const dataChange = {
      title: item.title,
      completed:
        item.completed === "N" ? "P" : item.completed === "P" ? "F" : "N",
    };
    Update(item.id, dataChange, refreshList);
  };

  return (
    <Container fluid="md" gap={3}>
      <Row>
        <Col xs={12}>
          <TaskForm
            writtenTask={writtenTask}
            onChangeForm={onChangeForm}
            onSubmitForm={onSubmitForm}
            writtenDescription={writtenDescription}
            onChangeDescription={onChangeDescription}
            deadline={deadline}
            onChangeDeadline={onChangeDeadline}
            priority={priority}
            onChangePriority={onChangePriority}
          ></TaskForm>
          <Stack direction="horizontal" className="col-sm-2 mx-auto" gap={3}>
            <ViewMode setDisplay={setDisplay}></ViewMode>
            <SortingMode setSortingOption={setSortingOption}></SortingMode>
            <Button onClick={refreshList}>Refresh</Button>
          </Stack>
        </Col>
      </Row>
      <Row gap={5}></Row>
      {display === "Kanban"
        ? RenderKanban(TodoList, handleDelete, handleCompleted, handleEdit)
        : display === "Urgent"
        ? RenderUrgent(TodoList, handleDelete, handleCompleted, handleEdit)
        : RenderDefault(TodoList, handleDelete, handleCompleted, handleEdit)}
    </Container>
  );
};

export default MainPage;
function RenderKanban(TodoList, handleDelete, handleCompleted, handleEdit) {
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
function RenderUrgent(TodoList, handleDelete, handleCompleted, handleEdit) {
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
