import React, {useState} from "react";
import "./App.css";
import Header from "./Structure/Header.js";
import MainPage from "./Structure/MainPage.js"
import Footer from "./Structure/Footer.js";

function App() {
  useState();
  let theme = "Default";
  const [clicked, setClicked] = useState('default');
  const handleClick = () => {
    (clicked === 'default' )? setClicked('ereader') : setClicked('default');
    console.log(clicked);
  };

  return (
    <div className={clicked} >
      <Header></Header>
      <MainPage></MainPage>
      <Footer></Footer>
      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
}

export default App;
