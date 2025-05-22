import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="heading">
        <strong>Himanshu Food's</strong>
      </h1>
      <div className="cart-sec">
        Your Cart <p className="cart-num">0</p>
      </div>
    </div>
  );
};

export default Navbar;
