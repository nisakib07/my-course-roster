import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";

const Home = () => {
  const handleSelect = (card) => {
    console.log("Hello", card);
  };
  return (
    <div>
      <div className="py-12">
        <h1 className="text-center text-3xl font-bold">Course Registration</h1>
      </div>
      <div className="flex">
        <Cards handleSelect={handleSelect}></Cards>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
