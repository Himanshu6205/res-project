import React from "react";
import "./Header.css";

const Header = ({ onOpenCart }) => {
  return (
    <header className="header">
      <h1>ReactMeals</h1>
      <button className="cart-button" onClick={onOpenCart}>
        🛒 Your Cart <span className="badge">3</span>
      </button>
    </header>
  );
};

export default Header;
