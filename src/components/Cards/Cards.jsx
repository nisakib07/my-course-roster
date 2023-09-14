import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ handleSelect }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid grid-cols-3 w-3/4 gap-4 mb-5">
      {cards.map((card) => (
        <Card card={card} key={card.id} handleSelect={handleSelect}></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};

export default Cards;
