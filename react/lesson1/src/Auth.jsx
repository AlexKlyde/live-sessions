import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

/* How to work on react  tasks. Step by step guide
1. Learn requirements
2. Create layout
3. Split layout into components
4. Create step by step algo for each component (& input/output)
5. Write draft solution for each component & testing
6. Refactoring & final testing -> final solutio
 */

// algo
// 1. set a state for loggedIn and Spinner
// 2. write a function for login btn that hide login button and shows spinner for 2sec
// 3. write a function for logout btn that hide changes the state of islogin button to true
// 4. write a condition that toggles the buttons depends on the state 

// algo:
// 1. show Login by default
// 2. show Spinner after Login click & hide Login
// 3. show Logout after 2 sec, hide Spinner
// 4. show Login after logout

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isProcessing: false,
    };
  }

  loginHandler = () => {
    this.setState({
      isProcessing: true,
    });

     setTimeout(() => {
       this.setState({
         isLoggedIn: true,
         isProcessing: false
       });
     }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isProcessing, isLoggedIn } = this.state;

    if (isProcessing) {
      return <Spinner size={50} />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler}/>
    }
    
    return (
      <Login onLogin={this.loginHandler} />
    )
  }
}

export default Auth;
