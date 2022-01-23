import axios from "axios";
function Read(setTodoList, option) {
  axios
    .get(`http://localhost:8000/api/todos${option}/`)
    .then((res) => setTodoList(res["data"]))
    .catch((err) => console.log(err));
}
function Create(newObject, refreshList) {
  console.log(newObject);
  axios
    .post(`http://localhost:8000/api/todos/`, newObject)
    .then((res) => refreshList());
}
function Update(item_id, dataChange, refreshList) {
  console.log(dataChange)
  axios
    .put(`http://localhost:8000/api/todos/${item_id}/`, dataChange)
    .then((res) => refreshList());
}
function Delete(item, refreshList) {
  axios
    .delete(`http://localhost:8000/api/todos/${item.id}/`)
    .then((res) => refreshList());
}
export { Create, Read, Update, Delete };
