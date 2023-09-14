import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleSelect = (card) => {
    const newCartItems = [...cartItems, card];
    setCartItems(newCartItems);
  };
  return (
    <div>
      <div className="py-12">
        <h1 className="text-center text-3xl font-bold">Course Registration</h1>
      </div>
      <div className="flex gap-3">
        <Cards handleSelect={handleSelect}></Cards>
        <Cart cartItems={cartItems}></Cart>
      </div>
    </div>
  );
};

export default Home;
