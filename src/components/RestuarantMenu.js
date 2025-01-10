import React, { useState } from "react";
import { useParams } from "react-router";

import useRestuarantMenu from "./utils/useRestuarantMenu";
import ResturantCategory from "./ResturantCategory";

const RestuarantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarantMenu(resId);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (resInfo === null) return <h1> Loading....</h1>;

  const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const itemCategories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (each) =>
        each?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("itemCategories: ", itemCategories);

  return (
    <div className="text-center mt-4">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-bold text-lg">{costForTwoMessage}</p>

      <div>
        {itemCategories?.map((each, i) => (
          <ResturantCategory
            data={each}
            key={i}
            showItems={i === currentIndex}
            setCurrentIndex={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestuarantMenu;
