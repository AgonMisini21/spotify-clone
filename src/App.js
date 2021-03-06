import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotyfy = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotyfy.ssetAccesToken(_token);
    }

    console.log("token", token);
  }, []);

  return <div className="app">{token ? <h1>Logged in</h1> : <Login />}</div>;
}

export default App;