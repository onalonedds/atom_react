import React, { createContext, useState, useEffect } from "react";
import api from "./api";

// Create Context object
const UserContext = createContext(null);

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .getCurrentUser()
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to fetch user data");
      });
    /*
    const fetchUser = async () => {
      try {
        const response = await api.getCurrentUser();
        setUser(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch user data');
      }
    };

    fetchUser();*/
  }, [setUser]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
