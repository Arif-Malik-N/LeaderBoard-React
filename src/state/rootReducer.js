import { combineReducers } from 'redux'
import leaderReducer from './leader/leader-Reducer';

const rootReducer=combineReducers({
        leaders: leaderReducer
})
export default rootReducer;