import { Card } from "react-bootstrap";

const TaskDate = (props) => {
  if (props.date === null) return <div></div>;
  const date = new Date(props.date);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <Card.Subtitle className="mb-2">
      Deadline : {month} {day}, {year}
    </Card.Subtitle>
  );
};
export default TaskDate;
