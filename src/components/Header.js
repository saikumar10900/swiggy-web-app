import { useState } from "react";
import { RES_LOGO } from "./utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState(true);
  return (
    <div className="header-section">
      <div className="">
        <img src={RES_LOGO} alt="food-log" className="res-logo" />
      </div>
      <ul>
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
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <button
            onClick={() => {
              setLoginStatus(!loginStatus);
            }}
          >
            {loginStatus ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
