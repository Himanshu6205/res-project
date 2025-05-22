import React, { useState } from "react";
import "./FoodList.css";

const FoodList = ({ meals }) => {
  return (
    <div className="food-list">
      {meals.map((meal) => (
        <FoodItem key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

const FoodItem = ({ meal }) => {
  const [amount, setAmount] = useState(1);

  const handleAdd = () => {
    console.log(`Added ${amount} x ${meal.title}`);
  };

  return (
    <div className="food-item">
      <div>
        <h3 className="food-title">{meal.title}</h3>
        <p className="food-desc">{meal.desc}</p>
        <p className="food-price">${meal.price}</p>
      </div>

      <div className="food-actions">
        <label className="food-amount-label">
          Amount
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className="food-amount-input"
          />
        </label>
        <button onClick={handleAdd} className="add-button">
          + Add
        </button>
      </div>
    </div>
  );
};

export default FoodList;
