import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ height: "20vh", backgroundColor: "blue" }}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;
