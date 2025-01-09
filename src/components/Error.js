import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS Something went wrong</h1>
      <p>
        {err.status} - {err.statusText}
      </p>
    </div>
  );
};

export default Error;
