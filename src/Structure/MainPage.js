import React, { useState } from "react";
import Task from "./components/Task.js";
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

function SettingMenu(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        ≡
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Change display</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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

const MainPage = (props) => {
  const [display, setDisplay] = useState("normal");
  const changeDisplay = () => {
    display === "normal" ? setDisplay("kanban") : setDisplay("normal");
  };
  const [writtenTask, setWrittenTask] = useState("");
  const onChangeForm = (event) => {
    setWrittenTask(event.target.value);
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (writtenTask === "") return null;
    const taskData = {
      title: writtenTask,
    };
    console.log(taskData);
    setWrittenTask("");
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
          <SettingMenu></SettingMenu>
        </Col>
      </Row>
      <Row gap={5}></Row>
      <Card style={{ width: "100%" }}>
        <Card.Title style={{ textAlign: "center" }}>Task to do</Card.Title>
        <Task task="Do Grocery"></Task>
      </Card>
    </Container>
  );
};
export default MainPage;
