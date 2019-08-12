import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Home from './home'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Footer from './footer'
class BrowserRouterLinks extends Component {
  render() {
    return (
      <div>
        <Link to="/routing/browser-router/home/">View Home</Link> | 
            <Link to="/routing/browser-router/about/">View About</Link> |
            <Link to="/routing/browser-router/experience/">View Experience</Link> |
            <Link to="/routing/browser-router/projects/">View Projects</Link> |
            <Link to="/routing/browser-router/footer/">View Footer</Link>
            <Switch>
              <Route path='/routing/browser-router/home/' component={Home} />
              <Route path='/routing/browser-router/about/' component={About} />
              <Route path='/routing/browser-router/experience/' component={Experience} />
              <Route path='/routing/browser-router/projects/' component={Projects} />
              <Route path='/routing/browser-router/footer/' component={Footer} />
            </Switch>
      </div>
    );
  }
}
export default BrowserRouterLinks;