//function createStore and compose must be uploaded from redux
import {createStore, applyMiddleware, compose} from 'redux';
//thunk
import thunk from 'redux-thunk';
//where do you put rootReducer
import rootReducer from '../reducers/rootReducer';
import {sessionService} from 'redux-react-session';

const initialState = {};
const middlewares = [thunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));

sessionService.initSessionService(store);

export default store;