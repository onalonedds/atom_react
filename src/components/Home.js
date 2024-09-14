import React, { useContext } from "react";
import UserContext from "../UserContext";

const Home = () => {
  const user = useContext(UserContext);

  if (!user)
    return (
      <div>
        <h2>Home</h2>
      </div>
    );

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
