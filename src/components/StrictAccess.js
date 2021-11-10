import React from 'react';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const { user } = this.props;
    return(
      <div>
        <Link to="/">Home</Link>
        <Route exact path="/StrictAccess">
          {user.userName === "joao" && user.password === 1234 ? <h1>Bem vindo João</h1> : <Redirect to="/"> {alert("Access denied")} </Redirect>  }
        </Route>
      </div>
    );
  }
}

export default StrictAccess;