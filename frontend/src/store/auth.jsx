
import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");


  const storeTokenInLS = (serverToken) => {
    localStorage.setItem('token', serverToken);
    setToken(serverToken); 
  };


  let isLoggedIn = !!token;

  console.log(isLoggedIn);

 
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem('token');
  };


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken !== token) {
      setToken(storedToken);
    }
  }, [token]);




    const userAuthentication = async () =>{
      try{
        const response = await fetch("http://localhost:5000/api/auth/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if(response.ok){
          const data = await response.json();
          console.log('user data', data.userData);
          
          setUser(data.userData);
        }
      }catch{
        console.error("error fetching data")
      }
    }

  useEffect(() =>{
    userAuthentication();
  }, [])



  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};