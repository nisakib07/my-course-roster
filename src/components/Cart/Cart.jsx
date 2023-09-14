import PropTypes from "prop-types";
import CartItems from "../CartItems/CartItems";

const Cart = ({ cartItems }) => {
  return (
    <div className="w-1/4 shadow-lg p-6 rounded-lg">
      <h3 className="text-lg font-bold text-[#2F80ED] border-b-2 pb-4">
        Credit Hour Remaining
      </h3>

      <h3 className="text-xl font-bold mt-4 mb-5">Course Name</h3>
      <div className="border-b-2">
        {cartItems.map((cartItem) => (
          <CartItems cartItem={cartItem} key={cartItem.id}></CartItems>
        ))}
      </div>
      <p className="text-[#1c1b1bcc] font-medium my-4">Total Credit Hour: </p>
      <p className="font-semibold text-[#1c1b1bcc]">Total Price : </p>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Cart;
