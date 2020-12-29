import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import BlogPage from './pages/BlogPage';
import TeamPage from './pages/TeamPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/blogs' component={BlogPage} exact />
        <Route path='/team' component={TeamPage} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
