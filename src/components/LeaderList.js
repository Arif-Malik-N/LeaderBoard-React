import React, { useState, useEffect } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  getData,
  deleteLeader,
  incrementPoints,
  decrementPoints,
} from "../state/leader/leader-Action";
import "./style.css";
import moment from 'moment';
import { validateNamespace } from "@firebase/util";

function LeaderList() {
  const state = useSelector((state) => state.leaders);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const [ leadersData, setLeaderData]= useState('')
  useEffect(() => {
    let mounted = true;
    dispatch(getData());
   
    if (state.leaders != '') {
      setisLoading(false);
    }
    else{
      
    }
    return function cleanup() {
      mounted = false;
    };
  }, [state.leaders, leadersData]);
const com=(v)=>{
  
  setLeaderData('')
  console.log('hi');
}

  return (
    <div>
      <div
       className='list-header'
      >
        <p>Name</p>
        <p>Location</p>
        <p>Date</p>
        <p>Unit</p>
        <p>Points</p>
        <p>Type</p>
        <p>Action</p>
      </div>
      {isLoading === true? (
        <div>Add Players</div>
      ) : (
        state.leaders.map((v, i) => {
          return (
            <div
            className='list-container'
            >
              <div className="list-item">
                <p>{v.name}</p>
              </div>
              <div className="list-item">
                <p>{v.location}</p>
              </div>
              <div className="list-item">
                <p>{
                moment(v.date).format('DD-MM-YYYY')
                
                }</p>
              </div>

              <div className="list-item">
                <p>{v.unit}</p>
              </div>
              <div className="list-item">
                  <span
                    className="btn"
                    onClick={() => decrementPoints(v.id, v.points)}
                    >
                    -
                  </span>
                    <p className="points">
                  {v.points}
                  </p>
                  <div
                    className="btn"
                    onClick={() => incrementPoints(v.id, v.points)}
                  >
                    +
                  </div>
              </div>
              <div className="list-item">
                <p>{v.type}</p>
              </div>
              <div className="list-item"  onClick={deleteLeader(v.id)}>
      
                  <DeleteOutline className='delete-btn' />
                
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
export default LeaderList;
