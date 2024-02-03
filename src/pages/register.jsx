import React from "react";
import File from "../assets/file.png";

const Register = (props) => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Welcome To Live-Chat</span>
        <span className="title">Register Now</span>
        <form action="post">
          <input type="text" name="fullName" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={File} alt="File Icon" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
