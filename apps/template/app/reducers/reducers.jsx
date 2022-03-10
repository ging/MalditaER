import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
import screenReducer from './screenReducer';
import puzzleReducer from './puzzleReducer';

const GlobalState = combineReducers({
  loading:loadingReducer,
  screen:screenReducer,
  puzzle:puzzleReducer,
});

export default GlobalState;