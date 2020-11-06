import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import BlogPage from './pages/blogPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/Blogs' component={BlogPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
