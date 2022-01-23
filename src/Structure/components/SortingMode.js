import Dropdown from "react-bootstrap/Dropdown";
function SortingMode(props) {
  const onClickPriorityOption = () => {
    props.setSortingOption("");
  };
  const onClickByDate = () => {
    props.setSortingOption("date");
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sorting
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={onClickPriorityOption}>
          By Priority
        </Dropdown.Item>
        <Dropdown.Item onClick={onClickByDate}>
          By Deadlines
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortingMode;
