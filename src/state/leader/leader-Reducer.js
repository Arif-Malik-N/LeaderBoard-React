
import  * as actionTypes from './leader-type'

const INITIAL_STATE = {
    leaders: []
}


const leaderReducer = ( state= INITIAL_STATE , action)=>{
switch (action.type) {
    case actionTypes.CREATE_LEADER:
        return{
            ...state,
            leaders:action.payload
        }
    case actionTypes.GET_LEADERS:
        return{
            ...state,
            leaders:action.payload
        }
   

    default:
     return  state;
}
}

export default leaderReducer;