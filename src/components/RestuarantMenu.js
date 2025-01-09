import React, { useEffect } from "react";
import { useParams } from "react-router";
import { RESTAURANT_MENU_API } from "./utils/constants";

const RestuarantMenu = () => {
  const { resId } = useParams();
  const fetchRestaurantMenu = async () => {
    const response = await fetch(RESTAURANT_MENU_API + resId);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  return <div>RestuarantMenu</div>;
};

export default RestuarantMenu;
