import { BsCurrencyDollar, BsBook } from "react-icons/bs";
import PropTypes from "prop-types";

const Card = ({ card, handleSelect, notify }) => {
  const { img, course_name, course_details, price, credit_hour } = card;
  return (
    <div>
      <div className="bg-base-100 h-[450px] shadow-xl p-4 rounded-lg">
        <figure>
          <img className="w-full" src={img} alt="" />
        </figure>
        <div>
          <h2 className="my-4 text-base font-semibold">{course_name}</h2>
          <p className="text-[#1c1b1b99] text-sm h-[130px]">{course_details}</p>
          <div className="flex justify-between ">
            <p className="flex items-center gap-3">
              <BsCurrencyDollar />
              <span className="text-[#1c1b1b99] font-medium">
                Price: {price}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <BsBook />
              <span className="text-[#1c1b1b99] font-medium">
                Credit : {credit_hour}hr
              </span>
            </p>
          </div>
          <div className="flex">
            <button
              onClick={() => {
                handleSelect(card);
                notify();
              }}
              className="bg-[#2F80ED] text-white text-lg font-semibold w-full mt-6 rounded-lg p-2 ">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
};

export default Card;
