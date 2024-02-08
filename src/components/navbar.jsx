import React from "react";
import Kammo from "../assets/Kammo.jpg";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Live-Chat</div>
      <div className="user">
        <img src={Kammo} alt="" />
        <span>Kammo</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default navbar;
