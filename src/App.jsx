import React, { useState } from "react";
import FoodList from "./components/FoodList";
import CartModal from "./components/CartModal";
import Header from "./components/Header"; // contains cart button

const DUMMY_MEALS = [
  { id: "m1", title: "Sushi", desc: "Finest fish and veggies", price: 22.99 },
  { id: "m2", title: "Schnitzel", desc: "A german specialty!", price: 16.5 },
  {
    id: "m3",
    title: "Barbecue Burger",
    desc: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    title: "Green Bowl",
    desc: "Healthy...and green...",
    price: 10.99,
  },
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => setIsCartOpen(true);
  const closeCartHandler = () => setIsCartOpen(false);

  return (
    <>
      <Header onOpenCart={openCartHandler} />
      {isCartOpen && <CartModal onClose={closeCartHandler} />}
      <FoodList meals={DUMMY_MEALS} />
    </>
  );
}

export default App;
