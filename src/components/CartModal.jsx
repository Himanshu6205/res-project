import React from "react";
import "./CartModal.css";

const CartModal = () => {
  const cartItems = [
    {
      id: "m1",
      title: "Sushi",
      amount: 2,
      price: 22.99,
    },
  ];

  const totalAmount = cartItems
    .reduce((acc, item) => acc + item.amount * item.price, 0)
    .toFixed(2);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <h2>{item.title}</h2>
                <div className="summary">
                  <span className="price">${item.price}</span>
                  <span className="amount">x {item.amount}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="total">
          <span>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
        <div className="actions">
          <button className="button--alt">Close</button>
          <button className="button">Order</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
