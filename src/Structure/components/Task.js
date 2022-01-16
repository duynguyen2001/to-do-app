import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import TaskDate from "./TaskDate";
import axios from "axios";

function Task(props) {  
  return (
    <Card
      bg={`${
        props.item.completed === "N" ? "danger" : props.item.completed === "P" ? "warning" : "success"
      } `}
      text={`${props.item.completed === "P" ? "dark" : "white"}`}
    >
      <Card.Title>{props.item.title}</Card.Title>
      <Card.Body>
        {/* <Card.Subtitle>{date}</Card.Subtitle> */}
        <Card.Subtitle>{props.item.completed}</Card.Subtitle>
        <Card.Subtitle>{props.item.id}</Card.Subtitle>
        <Button
          variant="outline-danger"
          onClick={() => props.handleDelete(props.item)}
        >
          Delete Task
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => props.handleCompleted(props.item)}
        >
          Change State
        </Button>
        {/* <TaskDate month = {date.month} day = {date.day} year = {date.year}></TaskDate> */}
      </Card.Body>
    </Card>
  );
}

export default Task;
