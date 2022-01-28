import axios from "axios";
var options = { 
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': '43de6d653d125545232251985cf074b63e25f',
     'content-type': 'application/json' },
     json: true,
     };

function Read(setTodoList, option) {
  axios
    .get('rest/tododatabase',  options)
    .then((res) => {setTodoList(res.data);
  console.log("data in res : " + res.data)})
    .catch((err) => console.log(err));
}
function Create(newObject, refreshList) {
  console.log(newObject);
  axios
    .post('rest/tododatabase', newObject, options)
    .then((res) => refreshList())
    .catch((err) => console.log(err));
}
function Update(item_id, dataChange, refreshList) {
  console.log(dataChange);
  axios
    .put(`rest/tododatabase/${item_id}`, dataChange, options)
    .then((res) => refreshList())
    .catch((err) => console.log(err));
}
function Delete(item, refreshList) {
  axios
    .delete(`rest/tododatabase/${item._id}/`, options)
    .then((res) => refreshList())
    .catch((err) => console.log(err));
}
export { Create, Read, Update, Delete };
