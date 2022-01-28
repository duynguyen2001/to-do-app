import React, { useState, useEffect } from "react";
import { Create, Read, Update, Delete } from "./components/CRUD.js";
import ViewMode from "./components/ViewMode.js";
import SortingMode from "./components/SortingMode";
import { Col, Container, Row, Button, Stack } from "react-bootstrap";
import { TaskForm } from "./components/TaskForm";
import { RenderDefault } from "./RenderDefault";
import { RenderUrgent } from "./RenderUrgent";
import { RenderKanban } from "./RenderKanban";

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
    Update(item._id, dataChange, refreshList);
  };
  const handleCompleted = (item) => {
    const dataChange = {
      // "_id" : item._id,
      "completed":
        item.completed === "N" ? "P" : item.completed === "P" ? "F" : "N",
    };
    Update(item._id, dataChange, refreshList);
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
      <br/>
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

