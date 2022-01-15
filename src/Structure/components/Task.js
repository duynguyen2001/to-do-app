import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import TaskDate from "./TaskDate";

function Task(props) {
  const [state, changeState] = useState("Not Started");
  const onClickedState = () => {
    switch (state) {
      case "Not Started":
        changeState("In Progress");
        break;
      case "In Progress":
        changeState("Finished");
        break;
      case "Finished":
        changeState("Not Started");
        break;
      default:
        changeState("Not Started");
        break;
    }
  };

  return (
    <Card
      bg={`${
        state === "Not Started"
          ? "danger"
          : state === "In Progress"
          ? "warning"
          : "success"
      } `}
      text = {`${(state === 'In Progress') ? 'dark':'white'}`}
      onClick={onClickedState}
    >
      <Card.Title>{props.task}</Card.Title>
      <Card.Body>
        {/* <Card.Subtitle>{date}</Card.Subtitle> */}
        <Card.Subtitle>{state}</Card.Subtitle>

        {/* <TaskDate month = {date.month} day = {date.day} year = {date.year}></TaskDate> */}
      </Card.Body>
    </Card>
  );
}

export default Task;
