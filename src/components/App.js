import React from '../../node_modules/react';
import { Route, Redirect, Switch } from '../../node_modules/react-router-dom';
import Reader from './Reader/Reader';
import publications from '../bd/publications.json';

const App = () => (
  <>
    <Switch>
      <Route
        path="/reader"
        render={props => <Reader {...props} items={publications} />}
      />
      <Redirect from="/*" to="/reader" />
    </Switch>
  </>
);

export default App;
