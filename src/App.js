import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./Structure/Header.js";
import MainPage from "./Structure/MainPage.js";
import Container from "react-bootstrap/Container";
import "./App.css"
function App() {

  return (
    <Container fluid className = "App">
      <Header></Header>
      <MainPage></MainPage>
      {/* <Footer></Footer> */}
    </Container>
  );
}

export default App;
