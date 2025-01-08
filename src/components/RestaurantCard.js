import { RES_CARD_IMG_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, avgRating, cuisines } =
    props?.resData?.info;

  return (
    <div className="res-card">
      <img
        src={RES_CARD_IMG_URL + cloudinaryImageId}
        className="res-card-img"
        alt="res-card-img"
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{avgRating}</h6>
      <h6>{costForTwo}</h6>
    </div>
  );
};
export default RestaurantCard;
