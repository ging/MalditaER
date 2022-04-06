import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
import piezasReducer from "./piezasReducer";
import seleccionarPiezasReducer from "./seleccionarPiezasReducer";
import puzzleCompletoReducer from "./puzzleCompletoReducer";

const GlobalState = combineReducers({
  loading:loadingReducer,
  piezas:piezasReducer,
  piezasSeleccionadas:seleccionarPiezasReducer,
  puzzleCompleto:puzzleCompletoReducer,
});

export default GlobalState;