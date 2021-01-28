import React from 'react';

// input: (props): function
// output: 

const Login = ({onLogin}) => {
  return (
    <button
      className="login btn"
      onClick={onLogin}
    >
      Login
    </button>
  );
}
export default Login;
