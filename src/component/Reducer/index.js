import userSlice from './UserSlice'
import { combineReducers } from 'redux'
const rootReducer=combineReducers({
    userSlice,
});
export default rootReducer;