import { useEffect, useState } from "react";
import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import { RESTUARANTS_API } from "./utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredSearchList, setFilteredSearchList] = useState([]);
  const PromotedCard = PromotedRestaurantCard(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  const onFilterTopRatedRestaurants = () => {
    const filteredList = restaurants.filter((res) => res.info.avgRating > 4.3);
    setFilteredSearchList(filteredList);
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

  if (!onlineStatus) return <h1>Looks like you're offline</h1>;

  if (restaurants.length === 0) return <h1>Loading....</h1>;

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 my-3">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-black p-3 rounded-md"
        />
        <button
          onClick={() => {
            const x = restaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredSearchList(x);
          }}
          className="bg-gray-100 p-3 rounded-md"
        >
          Search
        </button>
        <button
          className="rounded-lg bg-blue-400 p-3"
          onClick={onFilterTopRatedRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="my-3 flex flex-wrap gap-3">
        {filteredSearchList.map((eachRes) => (
          <Link to={"/restaurants/" + eachRes.info.id} key={eachRes.info.id}>
            {eachRes.info.avgRating > 4.3 ? (
              <PromotedCard resData={eachRes} />
            ) : (
              <RestaurantCard resData={eachRes} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
