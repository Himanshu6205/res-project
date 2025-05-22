import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ResMain from "./components/ResMain";
import FoodList from "./components/Foodlist";

function App() {
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

  return (
    <>
      <Navbar />
      <ResMain />
      <FoodList meals={DUMMY_MEALS} />
    </>
  );
}

export default App;
