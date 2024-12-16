import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);


  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };


  const LogoutUser = useCallback(() => {
    alert("You have been logged out!");
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  }, []);


  const userAuthentication = useCallback(async () => {
    if (!token) return; 

    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      } else {
        console.error("Failed to fetch user data. Logging out.");
        LogoutUser(); 
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      LogoutUser(); 
    }
  }, [token, LogoutUser]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken !== token) {
      setToken(storedToken);
    }
  }, [token]);


  useEffect(() => {
    userAuthentication();
  }, [userAuthentication]);

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
