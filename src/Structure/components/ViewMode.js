import Dropdown from "react-bootstrap/Dropdown";
function ViewMode(props) {
  const onClickKanbanMode = () => {
    props.setDisplay("Kanban");
  };
  const onClickDefaultMode = () => {
    props.setDisplay("Default");
    console.log("Runned");
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        View Mode
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={onClickDefaultMode}>
          Default Mode
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={onClickKanbanMode}>
          Kanban Mode
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ViewMode;
