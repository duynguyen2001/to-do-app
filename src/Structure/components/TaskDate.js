import { Card } from "react-bootstrap";

const TaskDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Card.Subtitle className="mb-2 text-muted">
      {month} {day}, {year}
    </Card.Subtitle>
  );
};
export default TaskDate;
