import React, { Component } from 'react';
import './App.css';
import MyRoutes from './config/routes.js';
import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="content">
            { MyRoutes }
          </div>
        </div>
        <footer>© Kyle Easton 2018</footer>
      </div>
    );
  }
}

export default App;
