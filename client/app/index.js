import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import { About } from './components/About/About';
import { Alaric } from './components/About/Team/Alaric';
import { Peter } from './components/About/Team/Peter';
import { Sid } from './components/About/Team/Sid';
import { Harpreet } from './components/About/Team/Harpreet';
import { Lorraine } from './components/About/Team/Lorraine';
import { Albert } from './components/About/Team/Albert';
import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/team/about" component={About}/>
        <Route path="/team/peter" component={Peter}/>
        <Route path="/team/sid" component={Sid}/>
        <Route path="/team/alaric" component={Alaric}/>        
        <Route path="/team/lorraine" component={Lorraine}/>
        <Route path="/team/albert" component={Albert}/>
        <Route path="/team/harpreet" component={Harpreet}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
