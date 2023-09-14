import PropTypes from "prop-types";

const CartItems = ({ cartItem }) => {
  const { course_name } = cartItem;
  return (
    <div>
      <ol>
        <li className="text-[#1c1b1b99]">{course_name}</li>
      </ol>
    </div>
  );
};

CartItems.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CartItems;
