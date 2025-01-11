import { useContext, useState } from "react";
import { RES_LOGO } from "./utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedUser, setUsername } = useContext(UserContext);
  const [loginStatus, setLoginStatus] = useState(true);
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="w-full flex justify-between bg-gray-100 border border-black">
      <div className="">
        <img src={RES_LOGO} alt="food-log" className="w-[100px] h-[100px]" />
      </div>
      <ul className="flex self-center gap-3">
        <li>Network status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/cart" className="font-bold text-xl">
            Cart - ({cartItems.length} items)
          </Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <button
          onClick={() => {
            setLoginStatus(!loginStatus);
            setUsername("ABCD");
          }}
        >
          {loginStatus ? "Logout" : "Login"}
        </button>
        <li>{loggedUser}</li>
      </ul>
    </div>
  );
};
export default Header;
