export function restoreState(new_state = {}, step){
  return {
    type:'RESTORE_STATE',
    new_state, step,
  };
}

export function restoreStateForPuzzle(puzzle_id = -1, step){
  return {
    type:'RESTORE_STATE_FOR_PUZZLE',
    puzzle_id, step,
  };
}

export function loaded(is_loaded = true){
  return {
    type:'LOADED',
    loaded:is_loaded,
  };
}

export function changePuzzle(puzzle_id = 0, step){
  return {
    type:'CHANGE_PUZZLE',
    puzzle_id, step,
  };
}

export function changeScreen(step = 0){
  return {
    type:'CHANGE_SCREEN',
    step,
  };
}