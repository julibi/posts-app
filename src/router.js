import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NewPost from './components/NewPost';
import Home from './components/Home';
import ViewPost from './components/ViewPost';

const MyRouter = () => 
  <Router>
      <div>
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
              </button>
              <NavLink className="navbar-brand" to="/">Logo</NavLink>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/NewPost">Create Post</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/NewPost" component={NewPost} />
        <Route path="/ViewPost/:id" component={ViewPost} />
      </div>
  </Router>;

export default MyRouter;