import { useState } from "react";
import { RES_LOGO } from "./utils/constants";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState(true);
  return (
    <div className="header-section">
      <div className="">
        <img src={RES_LOGO} alt="food-log" className="res-logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
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
