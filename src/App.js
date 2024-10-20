import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Redirect from './components/Redirect';
import redirects from './data/redirects';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Switch>
        {redirects.map((redirect, index) => (
          <Route key={index} path={redirect.path}>
            <Redirect url={redirect.url} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;
