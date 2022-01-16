import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useState } from "react";
// import TaskDate from "./TaskDate";
function Task(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(show);
  };

  return (
    <div>
      {" "}
      <Accordion defaultActiveKey="0" flush>
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
              {EditModal(props.item, show, handleClose, props.handleEdit)}
              {ButtonAction("Delete Task", props.item, props.handleDelete)}
            </Stack>

            {/* <TaskDate month = {date.month} day = {date.day} year = {date.year}></TaskDate> */}
          </Card.Body>
        </Card>
        <Accordion.Item eventKey="1">
          <Accordion.Header>See description</Accordion.Header>
          <Accordion.Body>{props.item.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
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

function EditModal(item, show, handleClose, handleEdit) {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [completed, setCompleted] = useState(item.completed);
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataChange = {
      title: title,
      description: description,
      completed: completed,
    };
    handleEdit(item, dataChange);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Task</Form.Label>
            <Form.Control
              defaultValue={title}
              name="title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              placeholder="Type your task here....."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              defaultValue={description}
              as="textarea"
              name="description"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              defaultValue={item.completed}
              as="select"
              name="completed"
              onChange={(event) => {
                setCompleted(event.target.value);
              }}
            >
              <option value="N">Not Started</option>
              <option value="P">In Progress</option>
              <option value="F">Finished</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
