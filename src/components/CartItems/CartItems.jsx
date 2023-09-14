import PropTypes from "prop-types";

const CartItems = ({ cartItem, count }) => {
  const { course_name } = cartItem;
  return (
    <div>
      <ol>
        <li className="text-[#1c1b1b99]">
          {count} {course_name}
        </li>
      </ol>
    </div>
  );
};

CartItems.propTypes = {
  cartItem: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default CartItems;
