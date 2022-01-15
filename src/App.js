import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import Header from "./Structure/Header.js";
import MainPage from "./Structure/MainPage.js"
import Footer from "./Structure/Footer.js";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./App.css"
function App() {

  return (
    <Container fluid className = "App">
      <Header></Header>
      <MainPage></MainPage>
      <Footer></Footer>
    </Container>
  );
}

export default App;
