import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
import loggedReducer from './loggedReducer';
import profileReducer from './profileReducer';
import emailsReducer from './emailsReducer';
import chatsReducer from './chatsReducer';

const GlobalState = combineReducers({
  loading:loadingReducer,
  logged:loggedReducer,
  profile:profileReducer,
  emails:emailsReducer,
  chats:chatsReducer,
});

export default GlobalState;