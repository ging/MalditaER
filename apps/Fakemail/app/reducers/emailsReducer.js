function emailsReducer(state = [], action){
  switch (action.type){
  case 'RESTORE_STATE':
    if((typeof action.new_state === "object") && (typeof action.new_state.emails === "object")){
      return action.new_state.emails;
    }
    return state;
  case 'UPDATE_EMAILS':
    return action.emails;
  default:
    return state;
  }
}

export default emailsReducer;