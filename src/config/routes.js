import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Projects from '../components/Projects.js';
// import CoolThings from '../components/CoolThings.js';
// import Contact from '../components/Contact.js';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route exact path='/about' component={ About }/>
    <Route exact path='/projects' component={ Projects }/>
  </Switch>
)