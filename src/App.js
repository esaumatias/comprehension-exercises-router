import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Users" render={() => <Users greetingsMessage="Good Morning" /> } />
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
