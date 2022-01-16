import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
// import TaskDate from "./TaskDate";
function Task(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);
  console.log(show)};
  const handleEdit = () => {};
  return (
    <Card
      bg={`${
        props.item.completed === "N"
          ? "danger"
          : props.item.completed === "P"
          ? "warning"
          : "success"
      } `}
      text={`${props.item.completed === "P" ? "dark" : "white"}`}
    >
      <Card.Title>{props.item.title}</Card.Title>
      <Card.Body>
        <Card.Subtitle>
          {props.item.completed === "N"
            ? "Not Started"
            : props.item.completed === "P"
            ? "In Progress"
            : "Finished"}
        </Card.Subtitle>
        <Stack
          direction="horizontal"
          className="d-flex justify-content-center"
          gap={3}
        >
          {ButtonAction("Change State", props.item, props.handleCompleted)}
          {ButtonAction("Edit Task", props.item, handleShow)}
          {EditModal(show, handleClose, handleEdit)}
          {ButtonAction("Delete Task", props.item, props.handleDelete)}
        </Stack>

        {/* <TaskDate month = {date.month} day = {date.day} year = {date.year}></TaskDate> */}
      </Card.Body>
    </Card>
  );
}

export default Task;
function ButtonAction(buttonName, item, handle) {
  return (
    <Button
      variant={`${item.completed === "P" ? "outline-dark" : "outline-light"}`}
      onClick={() => handle(item)}
    >
      {buttonName}
    </Button>
  );
}
function EditModal(show, handleClose, handleEdit) {
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEdit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
