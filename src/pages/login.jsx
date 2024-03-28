import React from "react";
import "../style.scss";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase.jsx";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogIn = (props) => {
  const [err, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Welcome Back To Live-Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="" placeholder="Password" />

          <button>Sign In</button>
          {err && (
            <span style={{ color: "red" }}>Something went wrong..!!!</span>
          )}
        </form>
        <p>
          Don't have an account? <Link to={"/register"}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
