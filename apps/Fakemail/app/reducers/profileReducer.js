function profileReducer(state = {}, action){
  switch (action.type){
  case 'RESTORE_STATE':
    if((typeof action.new_state === "object") && (typeof action.new_state.profile === "object")){
      return action.new_state.profile;
    }
    return state;
  case 'UPDATE_PROFILE':
    return action.profile;
  default:
    return state;
  }
}

export default profileReducer;