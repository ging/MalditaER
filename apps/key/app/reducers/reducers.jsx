import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
import puzzleReducer from './puzzleReducer';
import screenReducer from './screenReducer';

const GlobalState = combineReducers({
  loading:loadingReducer,
  puzzle:puzzleReducer,
  screen:screenReducer,
});

export default GlobalState;