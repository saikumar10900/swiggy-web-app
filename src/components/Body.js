import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTUARANTS_API } from "./utils/constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredSearchList, setFilteredSearchList] = useState([]);

  const onFilterTopRatedRestaurants = () => {
    console.log("restaurants: ", restaurants.length);

    const filteredList = restaurants.filter((res) => res.info.avgRating > 4.3);
    console.log("filteredList: ", filteredList.length);

    setRestaurants(filteredList);
  };

  const fetchDataFromAPI = async () => {
    const reponse = await fetch(RESTUARANTS_API);
    const data = await reponse.json();
    setRestaurants(
      data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredSearchList(
      data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  if (restaurants.length === 0) return <h1>Loading....</h1>;

  return (
    <div className="body-container">
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const x = restaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredSearchList(x);
          }}
        >
          Search
        </button>
      </div>
      <div>
        <button
          className="top-rated-restaurants-button"
          onClick={onFilterTopRatedRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredSearchList.map((eachRes) => (
          <RestaurantCard key={eachRes.info.id} resData={eachRes} />
        ))}
      </div>
    </div>
  );
};
export default Body;
