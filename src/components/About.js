import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h1>About</h1>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h1>pic of me</h1>
          </div>
          <div className="col-sm-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
