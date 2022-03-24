function loggedReducer(state = true, action){
  switch (action.type){
  case 'RESTORE_STATE':
    if((typeof action.new_state === "object") && (typeof action.new_state.logged === "boolean")){
      return action.new_state.logged;
    }
    return state;
  case 'LOGGED':
    return action.logged;
  default:
    return state;
  }
}

export default loggedReducer;