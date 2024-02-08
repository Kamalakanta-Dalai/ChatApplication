import React from "react";
import Navbar from "./navbar.jsx";
import Search from "./search.jsx";
import Chats from "./chats.jsx";

const sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default sidebar;
