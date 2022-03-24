function chatsReducer(state = [], action){
  switch (action.type){
  case 'RESTORE_STATE':
    if((typeof action.new_state === "object") && (typeof action.new_state.chats === "object")){
      return action.new_state.chats;
    }
    return state;
  case 'UPDATE_CHATS':
    return action.chats;
  default:
    return state;
  }
}

export default chatsReducer;