import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./components/Task.js";
import { Create, Read, Update, Delete } from "./components/CRUD.js";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  Stack,
  Form,
  Dropdown,
} from "react-bootstrap";

const MainPage = (props) => {
  const [TodoList, setTodoList] = useState([]);
  const [display, setDisplay] = useState("normal");
  const [writtenTask, setWrittenTask] = useState("");
  const [writtenDescription, setWrittenDescription] = useState("");
  useEffect(() => Read(setTodoList));
  // UI components
  const changeDisplay = () => {
    display === "Normal" ? setDisplay("Kanban") : setDisplay("Normal");
  };

  /*Changing cards handler*/
  // get data from the task data
  const onChangeForm = (event) => {
    setWrittenTask(event.target.value);
  };
  // 
  const refreshList = () => {
    Read(setTodoList);
    console.log(TodoList);
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
  return (
    <Container fluid="md" gap={3}>
      <Row>
        <Col xs={12}>
          <TaskForm
            writtenTask={writtenTask}
            onChangeForm={onChangeForm}
            onSubmitForm={onSubmitForm}
          ></TaskForm>
          {refreshList}
          <ViewMode setDisplay= {setDisplay}></ViewMode>
          <Button onClick={refreshList}>Refresh</Button>
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

function ViewMode(props) {
  const onClickKanbanMode =() => {
    props.setDisplay('Kanban');
  }
  const onClickDefaultMode = () => {
    props.setDisplay('Default');
    console.log('Runned');
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Settings
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={onClickDefaultMode}>Default Mode</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={onClickKanbanMode}>Kanban Mode</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function TaskForm(props) {
  return (
    <Form onSubmit={props.onSubmitForm}>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="me-auto"
          placeholder="Add your item here..."
          value={props.writtenTask}
          onChange={props.onChangeForm}
        />
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Stack>
    </Form>
  );
}

function renderList(TodoList, handleDelete, handleCompleted) {
  return TodoList.map((item) => (
    <Task
      item={item}
      handleDelete={handleDelete}
      handleCompleted={handleCompleted}
      key={item.id}
    ></Task>
  ));
}


export default MainPage;

