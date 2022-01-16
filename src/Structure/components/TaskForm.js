import React from "react";
import {
  Button,
  Stack,
  Form
} from "react-bootstrap";

export function TaskForm(props) {
  return (
    <Form onSubmit={props.onSubmitForm}>
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
    </Form>
  );
}
