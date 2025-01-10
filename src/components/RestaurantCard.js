import { RES_CARD_IMG_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, avgRating, cuisines } =
    props?.resData?.info;

  return (
    <div className="w-[200px] h-[400px] p-2 border border-black hover:cursor-pointer">
      <img
        src={RES_CARD_IMG_URL + cloudinaryImageId}
        className="w-full h-1/3 rounded-md"
        alt="res-card-img"
      />
      <h4 className="font-bold">{name}</h4>
      <h5 className="text-xs">{cuisines.join(", ")}</h5>
      <h6 className="text-sm font-bold">{avgRating}</h6>
      <h6>{costForTwo}</h6>
    </div>
  );
};
export const PromotedRestaurantCard = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
