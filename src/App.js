import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Navbar />
          <div id="colorlib-main">
            <Heading />
            <Projects />
            <Timeline />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
