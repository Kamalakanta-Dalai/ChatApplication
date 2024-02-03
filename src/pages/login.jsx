import React from "react";

const LogIn = (props) => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"></span>
        <span className="title"></span>
        <form action="post">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="" placeholder="Password" />

          <button>Sign In</button>
          <p>Don't have an account? Register</p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
