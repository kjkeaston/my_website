import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App-header row">
        <div className="col-sm-6">
          <h1><Link to="/">Kyle Easton</Link></h1>
        </div>
        <div className="col-sm-6">
          <ul className="navigation">
            <li className="nav-link"><Link to="/about">About</Link></li>
            <li className="nav-link"><Link to="/projects">Projects</Link></li>
            <li className="nav-link"><Link to="/coolthings">Cool Things</Link></li>
            <li className="nav-link"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;