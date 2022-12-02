import React, { Component } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './home'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Footer from './footer'
class BrowserRouterLinks extends Component {
  render() {
    return (
      <div>
        <Link to="/">View Home</Link> | 
            <Link to="/">View About</Link> |
            <Link to="/">View Experience</Link> |
            <Link to="/">View Projects</Link> |
            <Link to="/">View Footer</Link>
            <Routes>
              <Route path='/' component={<Home/>} />
              <Route path='/' component={<About/>} />
              <Route path='/' component={<Experience/>} />
              <Route path='/' component={<Projects/>} />
              <Route path='/' component={<Footer/>} />
            </Routes>
      </div>
    );
  }
}
export default BrowserRouterLinks;