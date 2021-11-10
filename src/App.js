import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'
import StrictAccess from './components/StrictAccess';

class App extends Component {
  user = {
    userName: "joao",
    password: 1234,
  }
  render() {
    return (
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Users/:id" render={(props) => <Users {...props} /> } />
          <Route exact path="/StrictAccess" render={() => <StrictAccess user={this.user} />} />
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
