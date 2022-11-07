import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title"> Register</span>
        <form>
          <input type="text" placeholder="dispaly name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />

          <label htmlFor="file">
            <img src={Add} alt="Avatar" />
            <span>Add an Avatar</span>
          </label>
          <button className="btnn">Sign Up</button>
          <p>you do have an account? Login</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
