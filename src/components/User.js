import React, { useEffect, useState } from "react";

const User = ({ name, location, designation }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("hello");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-card">
      <h1>Count from Function: {count}</h1>
      <h1>Name: {name}</h1>
      <h2>Designation: {designation}</h2>
      <h3>Location: {location}</h3>
    </div>
  );
};

export default User;
