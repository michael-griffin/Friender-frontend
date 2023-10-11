import './App.css';
import { useState, useEffect } from "react";
import api from './api';
import {BrowserRouter} from "react-router-dom";
import userContext from "./userContext";

import RoutesList from "./RoutesList";
import Navbar from "./Navbar";
import isLoading from "./isLoading";
import jwt_decode from "jwt-decode";


function App() {


  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isLoaded, setIsLoaded] = useState(false);

  function updateToken(token) {
    setToken(token);
    (token) ?
      localStorage.setItem("token", token) :
      localStorage.removeItem("token");
  }

  async function signup(formData){
    const token = await FrienderAPI.registerUser(formData);
    updateToken(token);
  }

  async function login(formData){
    const token = await FrienderAPI.loginUser(formData);
    updateToken(token);
  }

  async function logout(){
    setUser(null);
    updateToken(null);
  }

  async function update(formData){
    const newUser = await FrienderAPI.updateUser(formData);
    setUser(newUser);
  }

  useEffect(function getUserData(){
    async function fetchUserData(){
      if (token){
        try {
          FrienderAPI.token = token;
          const decoded = jwt_decode(token);
          const userData = await FrienderAPI.getUserInfo(decoded.username);
          setUser(userData);
        } catch(err) {
          console.log()
        }
      }
      setIsLoaded(true);
    }
    fetchUserData();
  }, [token])


  return (
    <div className="App">
      <Navbar logout={logout}/>
      {isLoaded ?
        <userContext.Provider value={{ user, token }}>
          <BrowserRouter>
            <RoutesList user={user} signup={signup} login={login} update={update}/>
          </BrowserRouter>
        </userContext.Provider>
        :
        <isLoading />
      }
    </div>
  );
}

export default App;
