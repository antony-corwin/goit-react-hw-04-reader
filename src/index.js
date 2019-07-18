import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import { HashRouter, Route } from '../node_modules/react-router-dom';
import App from './components/App';

ReactDOM.render(
  <HashRouter basename="/goit-react-hw-04-reader">
    <Route component={App} />
  </HashRouter>,
  document.getElementById('root'),
);
