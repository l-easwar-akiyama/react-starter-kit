import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Intro from './Intro';
import NoMatch from './NoMatch';

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Intro} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}
