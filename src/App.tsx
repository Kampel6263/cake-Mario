import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Albom from "./sections/albom/albom.component";
import Intro from "./sections/intro/intro.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Albom />
    </div>
  );
}

export default App;
