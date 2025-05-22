import React from "react";
import styles from "./FoodList.css";

const FoodList = ({ meals }) => {
  return (
    <div className={styles.foodList}>
      {meals.map((meal) => (
        <div key={meal.id} className={styles.foodItem}>
          <h3 className={styles.foodTitle}>{meal.title}</h3>
          <p className={styles.foodDesc}>{meal.desc}</p>
          <p className={styles.foodPrice}>${meal.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
