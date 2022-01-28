import axios from "axios";
// For common config
axios.defaults.headers.post["Content-Type"] = "application/json";
const mainAxios = axios.create({
  baseURL: 'https://tododatabase-4477.restdb.io/'
});
var options = { 
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': '61f423a67e552722950171d5',
     'content-type': 'application/json'},
     json: true
     };

function Read(setTodoList, option) {
  mainAxios
    .get('https://tododatabase-4477.restdb.io/rest/tododatabase',  options)
    .then((res) => {setTodoList(res.data);
  console.log("data in res : " + res.data)})
    .catch((err) => console.log(err));
}
function Create(newObject, refreshList) {
  console.log(newObject);
  mainAxios
    .post('https://tododatabase-4477.restdb.io/rest/tododatabase', newObject, options)
    .then((res) => refreshList())
    .catch((err) => console.log(err));
}
function Update(item_id, dataChange, refreshList) {
  console.log(dataChange);
  mainAxios
    .put(`https://tododatabase-4477.restdb.io/rest/tododatabase/${item_id}`, dataChange, options)
    .then((res) => refreshList())
    .catch((err) => console.log(err));
}
function Delete(item, refreshList) {
  mainAxios
    .delete(`https://tododatabase-4477.restdb.io/rest/tododatabase/${item._id}/`, options)
    .then((res) => refreshList())
    .catch((err) => console.log(err));
}
export { Create, Read, Update, Delete };
