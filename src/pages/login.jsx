import React from "react";
import "../style.scss";

const LogIn = (props) => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Welcome Back To Live-Chat</span>
        <span className="title">Login</span>
        <form action="post">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="" placeholder="Password" />

          <button>Sign In</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default LogIn;
