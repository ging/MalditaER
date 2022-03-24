function loadingReducer(state = true, action){
  switch (action.type){
  case 'RESTORE_STATE':
    return false;
  case 'LOADED':
    return !action.loaded;
  default:
    return state;
  }
}

export default loadingReducer;