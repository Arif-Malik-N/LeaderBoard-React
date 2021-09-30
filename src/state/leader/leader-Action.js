import * as actionTypes from './leader-type'
import app from '../../util/firebase';
import {
  getFirestore,
  collection,
  query,
  onSnapshot,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const fireStoreDb= getFirestore(app)


 export const handleSubmit =  (data) => (dispatch)=> {
console.log(data, 'dgsfggsdg');
 addDoc(collection(fireStoreDb, "leaders"), {
    name: data.name,
    location: data.location,
    date: data.date,
    unit: data.unit,
    type: data.type,
    points: data.points,
  })
};

 export const getData= ()=>(dispatch)=>{
  const q = query(collection(fireStoreDb, "leaders"));
  const unsub = onSnapshot(q, (querySnapshot) => {
    let leaders = [];
    querySnapshot.forEach((doc) => {
      leaders.push({ ...doc.data(), id: doc.id });
      dispatch({
        type: actionTypes.GET_LEADERS,
        payload: leaders,
      });
    });
  });
  return () => unsub();
 }

export const incrementPoints =(id,p)=>{
const updatePoints= doc(fireStoreDb, 'leaders', id)
 let perVousPoints = parseInt(p)
updateDoc( updatePoints,{
  points:perVousPoints+1
})
}

export const decrementPoints =(id,p)=>{
  const updatePoints= doc(fireStoreDb, 'leaders', id)
   let perVousPoints = parseInt(p)
  updateDoc( updatePoints,{
    points:perVousPoints-1
  })
  }


export const deleteLeader=(id)=>( dispatch)=>{
      deleteDoc( doc(fireStoreDb, 'leaders', id ))
}