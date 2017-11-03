import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import NewPost from './components/NewPost';
import Home from './components/Home';
import ViewPost from './components/ViewPost';

const MyRouter = () =>
  <Router>
    <div>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Posts-App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem><NavLink className="NavLink" to="/">Home</NavLink></NavItem>
            <NavItem><NavLink className="NavLink" to="/NewPost">Create A Post</NavLink></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/NewPost" component={NewPost} />
      <Route path="/ViewPost/:id" component={ViewPost} />
    </div>
  </Router>;

export default MyRouter;