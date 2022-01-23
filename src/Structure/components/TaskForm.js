import React from "react";
import { Button, Stack, Form, Container } from "react-bootstrap";

export function TaskForm(props) {
  return (
    <Form onSubmit={props.onSubmitForm}>
      <Container></Container>
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
      <Form.Control
        as="textarea"
        className="me-auto"
        placeholder="Add your description here..."
        rows={3}
        value={props.writtenDescription}
        onChange={props.onChangeDescription}
      />
      <Form.Control
        as="input"
        type="date"
        className="me-auto"
        placeholder="Add your description here..."
        rows={3}
        value={props.deadline}
        onChange={props.onChangeDeadline}
      />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              defaultValue={props.priority}
              as="select"
              name="priority"
              onChange={props.onChangePriority}
            >
              <option value={0}>Not Urgent and Not Important</option>
              <option value={1}>Not Urgent and Important</option>
              <option value={2}>Urgent and Not Important</option>
              <option value={3}>Urgent and Important</option>
            </Form.Control>
          </Form.Group>
    </Form>
  );
}
