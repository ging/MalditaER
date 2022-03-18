import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
import puzzleReducer from './puzzleReducer';
import puzzleDataReducer from './puzzleDataReducer';

const GlobalState = combineReducers({
  loading:loadingReducer,
  puzzle:puzzleReducer,
  puzzleData:puzzleDataReducer,
});

export default GlobalState;