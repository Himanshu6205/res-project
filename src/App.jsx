import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ResMain from "./components/ResMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ResMain />
      <h1>hii</h1>
    </>
  );
}

export default App;
