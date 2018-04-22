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
import Map from './components/Map/Map.js';

import { About } from './components/About/About';
import { SearchResults } from './components/SearchResults/SearchResults'
import { Registration } from './components/Registration/Registration'
import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/team/about" component={About}/>
        <Route path="/search/results" component={SearchResults}/>
        <Route path="/register/registration" component={Registration}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
