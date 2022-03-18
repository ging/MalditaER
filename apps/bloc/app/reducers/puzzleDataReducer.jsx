function puzzleDataReducer(state = {}, action = {}){
  switch (action.type){
  case 'RESTORE_STATE':
    if((typeof action.new_state === "object") && (typeof action.new_state.puzzle_data === "object")){
      return action.new_state.puzzle_data;
    }
    return state;
  case 'RESTORE_STATE_FOR_PUZZLE':
    if(typeof action.puzzle_data === "object"){
      return action.puzzle_data;
    }
    return state;
  case 'CHANGE_PUZZLE':
    if(typeof action.puzzle_data === "object"){
      return action.puzzle_data;
    }
    return state;
  default:
    return state;
  }
}

export default puzzleDataReducer;