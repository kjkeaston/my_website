import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Headshot } from './headshot.png';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-6">
              <img src={Headshot} alt="headshot" className="headshot" />
            </div>
            <div className="col-sm-6">
              <h2>Bio</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <hr/>
              <h2>Technologies</h2>
              <ul>
                <li>Languages: asdfsafj;afs</li>
                <li>Frameworks & Libraries: sdjfksdjf;ksakldfask</li>
                <li>Databases: MongoDB, PostgreSQL, MySQL</li>
                <li>Other: GitHub/Git, JIRA, asdfjsafdjas;fjasfk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
