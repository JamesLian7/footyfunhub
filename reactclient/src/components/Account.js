import React from 'react';

import NavBar from "./NavBar.js"
function LoginForm() {
  const login = () => {

    alert('Logged in!');
  };

  return (
    <div>
      <NavBar/>
    <div className="login-form">
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button className="btn5" onClick={login}>Login</button>
    </div>
    </div>
  );
}

export default LoginForm;
