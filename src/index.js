import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timelines from './Components/Timelines';
import TimelineCard from './Components/TimelineCard';
import TimelineList from './Components/TimelineList';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/timelineList" component={TimelineList} />
      <Route path="/timelineCard" component={TimelineCard} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

