import React, { Component } from 'react';
import fire from './fire';
import './App.css';
import Home from './components/home'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <div id="colorlib-main">
            <Home></Home>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Footer></Footer>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
