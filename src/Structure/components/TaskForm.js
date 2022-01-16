import React from "react";
import {
  Button,
  Stack,
  Form,
  Container
} from "react-bootstrap";

export function TaskForm(props) {
  return (
    <Form onSubmit={props.onSubmitForm}>
      <Container></Container>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="me-auto"
          placeholder="Add your item here..."
          value={props.writtenTask}
          onChange={props.onChangeForm} />
        <Button variant="secondary" type="submit">
          Submit
        </Button>
        
      </Stack>
      <Form.Control
        as = "textarea"
          className="me-auto"
          placeholder="Add your description here..."
          rows={3}
          value={props.writtenDescription}
          onChange={props.onChangeDescription} 
          />
    </Form>
  );
}
