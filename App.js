import React from "react";
import ReactDOM from "react-dom/client";
const h = <h1>Swiggy Web App</h1>;
const Header = () => <h2>Delivers on time</h2>;
const Description = () => <p>Best food delivery application you can find</p>;
const BannerSection = () => {
  return (
    <div>
      {h}
      <Header />
      <Description />
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<BannerSection />);
