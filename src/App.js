import React,{useState} from 'react';
// import logo from './logo.svg'; //unsused var
import './App.css';
import axios from'axios';

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "RGAPI-ec6965ab-9018-416c-9d28-005d55784459";

  function searchforplayer(event){
    //setting up the api calls for LOL
    var APICallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
    //handling the api call
    axios.get(APICallString).then(function (response){
      // console.log(response.data);
      setPlayerData(response.data);
      }).catch(function (error){
      console.log(error);
    })
  }
  console.log(playerData);
  return (
    <div className="App">
      <div className='container'>
        <h3>League of legend player Searcher</h3>
        <div className="box">
        <input type = 'text' onChange={e => setSearchText(e.target.value)}></input>
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        </div>
        <button className="btn btn3" onClick={e => searchforplayer(e)}>Search for Player</button>
      </div>
      {JSON.stringify(playerData) !== '{}'? 
      <>
      {/* <p>Data: </p> */}
      <p>Player InGame Name : {playerData.name}</p>
      <p>Summoner Level : {playerData.summonerLevel}</p>
      <p>Players Profile Picture : </p><img width={100} height={100} src={"https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/" + playerData.profileIconId + ".png"} alt='Loading'></img>
      </> 
      : 
      <><p></p></>
      }
    </div>
  );
}

export default App;
