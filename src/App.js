import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("")
  const API_KEY = 'RGAPI-32cbc5e7-4d8c-4dc4-9bfe-9a07894b4e74'

  function searchForPlayer(event) {
    // set up api call
    var APICallString = "https:na1.api.riotgames.com//lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY; 
    // handle api call
    
  }
  
  return (
    <div className="App">
      <div className='container'>
        <h5>Riot API Test</h5>
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchForPlayer(e)}>Submit</button>
      </div>
    </div>
  );
}

export default App;