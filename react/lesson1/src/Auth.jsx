import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// algo

class Auth extends Component {
  state = {
    isClicked: true,
  }

  handleClick = () => {
    console.log()
  }

  render() {
    return (
      <div>
        <Login />
        <Logout />
        <Spinner size={50} />
      </div>
    );
  }
};

export default Auth;
