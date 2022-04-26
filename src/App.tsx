import React from "react";
import "./App.css";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Albom from "./sections/albom/albom.component";
import ContactUs from "./sections/contact-us/contact-us.component";
import Intro from "./sections/intro/intro.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Albom />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
