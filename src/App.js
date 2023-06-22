import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "RGAPI-32cbc5e7-4d8c-4dc4-9bfe-9a07894b4e74";

  function searchForPlayer(event) {
    // set up api call
    var APICallString =
      "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      searchText +
      "?api_key=" +
      API_KEY;
    // handle api call
    axios
      .get(APICallString)
      .then(function (response) {
        // Success
        setPlayerData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  console.log(playerData);

  return (
    <div className="App">
      <div className="container">
        <h5>Riot API Test</h5>
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button onClick={(e) => searchForPlayer(e)}>Submit</button>
      </div>
      {JSON.stringify(playerData) !== "{}" ? (
        <>
          <p>NAME: {playerData.name}</p>
          <img
            width="100"
            height="100"
            src={
              "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/" +
              playerData.profileIconId +
              ".png"
            }
            alt="Profile Icon"
          />
          <p>LEVEL: {playerData.summonerLevel}</p>
        </>
      ) : (
        <>
          <p>No player data</p>
        </>
      )}
    </div>
  );
}

export default App;
