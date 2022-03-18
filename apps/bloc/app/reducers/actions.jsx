export function restoreState(new_state = {}){
  return {
    type:'RESTORE_STATE',
    new_state,
  };
}

export function restoreStateForPuzzle(puzzle_id = -1, puzzle_data = {}){
  return {
    type:'RESTORE_STATE_FOR_PUZZLE', puzzle_id, puzzle_data,
  };
}

export function loaded(is_loaded = true){
  return {
    type:'LOADED',
    loaded:is_loaded,
  };
}

export function changePuzzle(puzzle_id = -1, puzzle_data = {}){
  return {
    type:'CHANGE_PUZZLE', puzzle_id, puzzle_data,
  };
}