import {GLOBAL_CONFIG} from '../config/config.js';
const screens = ["pre_drawer", "keys", "post_drawer"];

const getScreenForPuzzle = (puzzle_id, step) => {
  const thisPuzzle = GLOBAL_CONFIG.escapp.appPuzzleIds[0];
  console.log(puzzle_id, step);
  if(puzzle_id < thisPuzzle){
    if(puzzle_id === thisPuzzle - 1){
      if(step !== undefined){
        return getScreen(step);
      }
    }
    return getScreen(0);
  } else if(puzzle_id >= thisPuzzle){
    if(step !== undefined){
      return getScreen(step);
    }
    return getScreen(2);
  }
};
const getScreen = (n) => screens[n];

function puzzleReducer(state = 0, action){
  switch (action.type){
  case 'RESTORE_STATE':
    if((typeof action.new_state === "object") && (typeof action.new_state.puzzle === "number")){
      return action.new_state.screen;
    }
    return state;
  case 'RESTORE_STATE_FOR_PUZZLE':
    if(typeof action.puzzle_id === "number"){
      return getScreenForPuzzle(action.puzzle_id, action.step);
    }
    return state;
  case 'CHANGE_PUZZLE':
    if((typeof action.puzzle_id === "number")){
      return getScreenForPuzzle(action.puzzle_id, action.step);
    }
    return state;
  case 'CHANGE_SCREEN':
    if((typeof action.step === "number") && action.step > 0 && action.step < screens.length){
      return getScreen(action.step);
    }
    return state;
  default:
    return state;
  }
}

export default puzzleReducer;