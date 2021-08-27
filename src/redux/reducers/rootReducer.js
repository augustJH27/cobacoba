//redux
import {combineReducers} from 'redux';

//session
import {sessionReducer } from "redux-react-session";

//now we're making rootReducer here
const rootReducer = combineReducers({
    session: sessionReducer
});

export default rootReducer;