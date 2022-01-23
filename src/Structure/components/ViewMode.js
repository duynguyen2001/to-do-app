import Dropdown from "react-bootstrap/Dropdown";
function ViewMode(props) {
  const onClickKanbanMode = () => {
    props.setDisplay("Kanban");
  };
  const onClickDefaultMode = () => {
    props.setDisplay("Default");
  };
  const onClickUrgentMode = () => {
    props.setDisplay("Urgent");
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        View Mode
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={onClickDefaultMode}>
          Default Mode
        </Dropdown.Item>
        <Dropdown.Item onClick={onClickKanbanMode}>
          Kanban Mode
        </Dropdown.Item>
        <Dropdown.Item onClick={onClickUrgentMode}>
          Urgent Mode
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ViewMode;
