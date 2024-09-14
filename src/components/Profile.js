import React, { useContext } from "react";
import UserContext from "../UserContext";

const Profile = () => {
  const user = useContext(UserContext);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Person: {user.person_name}</p>
      <p>Company: {user.company_name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
