import React, { Component } from "react";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";
import Footer from "./components/Footer";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MemeGenerator />
        <Footer />
      </div>
    );
  }
}

export default App;
