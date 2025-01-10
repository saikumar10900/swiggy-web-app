import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestuarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const fetchRestaurantMenu = async () => {
    const response = await fetch(RESTAURANT_MENU_API + resId);
    const data = await response.json();
    // console.log(
    //   data,
    //   data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card
    // );
    setResInfo(data?.data);
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  return resInfo;
};
export default useRestuarantMenu;
