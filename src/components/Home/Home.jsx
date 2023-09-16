import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelect = (card) => {
    const exists = cartItems.find((cartItem) => cartItem.id === card.id);
    if (exists) {
      toast.error("This course is already added");
    } else {
      const totalRemaining = remaining - card.credit_hour;
      const totalCredit = credit + card.credit_hour;
      const newTotalPrice = price + card.price;
      if (totalRemaining < 0 || totalCredit > 20) {
        toast.error(
          "You don't have enough credits left to acquire this course!"
        );
      } else {
        setRemaining(totalRemaining);
        setCredit(totalCredit);
        setPrice(newTotalPrice);
        const newCartItems = [...cartItems, card];
        setCartItems(newCartItems);
      }
    }
  };
  return (
    <div>
      <div className="py-12">
        <h1 className="text-center text-3xl font-bold">Course Registration</h1>
      </div>
      <div className="flex gap-3">
        <Cards handleSelect={handleSelect}></Cards>
        <Cart
          cartItems={cartItems}
          remaining={remaining}
          credit={credit}
          price={price}></Cart>
        <Toaster />
      </div>
    </div>
  );
};

export default Home;
