import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title"> Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button className="btnn">Sign in</button>
          <p>you do have an account? Register</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
