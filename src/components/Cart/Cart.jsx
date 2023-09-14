import PropTypes from "prop-types";
import CartItems from "../CartItems/CartItems";

const Cart = ({ cartItems, remaining, credit, price }) => {
  let count = 0;
  return (
    <div className="w-1/4 shadow-lg p-6 rounded-lg">
      <h3 className="text-lg font-bold text-[#2F80ED] border-b-2 pb-4">
        Credit Hour Remaining {remaining} hr
      </h3>

      <h3 className="text-xl font-bold mt-4 mb-5">Course Name</h3>
      <div className="border-b-2 pb-4">
        <ol>
          {cartItems.map((cartItem) => (
            <CartItems
              cartItem={cartItem}
              count={++count}
              key={cartItem.id}></CartItems>
          ))}
        </ol>
      </div>
      <p className="text-[#1c1b1bcc] font-medium my-4 border-b-2 pb-4">
        Total Credit Hour : {credit}
      </p>
      <p className="font-semibold text-[#1c1b1bcc]">
        Total Price : {price} USD
      </p>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  remaining: PropTypes.number.isRequired,
  credit: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Cart;
