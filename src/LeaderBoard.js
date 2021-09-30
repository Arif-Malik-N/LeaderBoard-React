import React,{ useState } from 'react'
import './leaderboard.css';
import './components/FieldInput'
import FieldInput from './components/FieldInput';
import LeaderList from './components/LeaderList'
const LeaderBoard = () => {

  
    return (
      <div className="mainContainer"> 
         <div className="header">
         <h1>Leaderboard</h1>
          <FieldInput/>
         </div>
        <LeaderList/>
      </div>
    )
}

export default LeaderBoard;
