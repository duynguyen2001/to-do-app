import axios from "axios";
function Read(setTodoList) {
  axios
    .get("http://localhost:8000/api/todos/")
    .then((res) => setTodoList(res["data"]))
    .catch((err) => console.log(err));
}
function Create(writtenTask, writtenDescription, refreshList) {
  if (writtenTask === "") return null;
  axios
    .post(`http://localhost:8000/api/todos/`, {
      title: writtenTask,
      description:
        writtenDescription === ""
          ? "No description has been added"
          : writtenDescription,
      completed: "N",
    })
    .then((res) => refreshList());
}
function Update(item, dataChange, refreshList) {
  axios
    .put(`http://localhost:8000/api/todos/${item.id}/`, dataChange)
    .then((res) => refreshList());
}
function Delete(item, refreshList) {
  axios
    .delete(`http://localhost:8000/api/todos/${item.id}/`)
    .then((res) => refreshList());
}
export { Create, Read, Update, Delete };
