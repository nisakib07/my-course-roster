import { BsCurrencyDollar, BsBook } from "react-icons/bs";

const Card = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-4">
        <figure>
          <img
            className="w-full"
            src="../../../src/assets/Rectangle 2-5.png"
            alt="Shoes"
          />
        </figure>
        <div>
          <h2 className="my-4 text-lg font-semibold">
            Introduction to C Programming
          </h2>
          <p className="text-[#1c1b1b99] text-sm mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="flex justify-between">
            <p className="flex items-center gap-3">
              <BsCurrencyDollar /> Price: 15000
            </p>
            <p className="flex items-center gap-3">
              <BsBook /> Credit : 1hr
            </p>
          </div>
          <button className="bg-[#2F80ED] text-white text-lg font-semibold w-full mt-6 rounded-lg p-2">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
