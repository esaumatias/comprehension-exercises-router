import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/About">About</Link>
        <Link to="/Users">Users</Link>
        <Link to="/StrictAccess">StrictAccess</Link>
        <h2>Home</h2>
        <p> My awesome Home component </p>
      </div>
    );
  }
}

export default Home;
