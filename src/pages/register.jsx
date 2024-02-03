import React from "react";
import File from "../assets/exha.jpg";

const Register = (props) => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"></span>
        <span className="title"></span>
        <form action="post">
          <input type="text" name="fullName" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="" placeholder="Password" />
          <input type="file" id="file" />
          <label htmlFor="file">
            <img src={File} alt="File Icon" />
          </label>
          <button>Sign Up</button>
          <p>Already have an account? Login</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
