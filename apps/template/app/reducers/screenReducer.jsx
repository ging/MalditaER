function screenReducer(state = 1, action){
  switch (action.type){
  case 'RESTORE_STATE':
    if((typeof action.new_state === "object") && (typeof action.new_state.screen === "number")){
      return action.new_state.screen;
    }
    return state;
  case 'CHANGE_PUZZLE':
  case 'RESTORE_STATE_FOR_PUZZLE':
    if(typeof action.puzzle_id === "number"){
      switch (action.puzzle_id){
      case 1:
      case 2:
      case 3:
        // Puzzles 1-3
        return 2;
      case 4:
        return 4;
      case 5:
        return 2;
      case 6:
        return 5;
      case 7:
        // ER completed
        return 5;
      default:
        return 1;
      }
    }
    // No puzzle solved
    return 1;
  case 'CHANGE_SCREEN':
    if(typeof action.screen === "number"){
      return action.screen;
    }
    return state;
  default:
    return state;
  }
}

export default screenReducer;