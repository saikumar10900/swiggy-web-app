import React, { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItems, setCurrentIndex }) => {
  const { title, itemCards } = data.card.card;
  const [isOpen, setIsOpen] = useState(showItems);

  const handleToggle = () => {
    setCurrentIndex();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto mt-4 shadow-lg bg-grey-50 my-4 p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleToggle}
        >
          <span className="font-bold text-sm">
            {title} ({itemCards.length})
          </span>
          <span className="text-xs">⬇️</span>
        </div>

        {showItems && isOpen && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
