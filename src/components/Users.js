import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { id } = this.props.match.params
    return (
      <div>
         <Link to="/">Home</Link>
        <h2>Users</h2>
        <p> { id }, My awesome Users component </p>
      </div>
    );
  }
};

export default Users;
