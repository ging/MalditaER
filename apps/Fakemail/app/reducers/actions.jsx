export function restoreState(new_state = {}){
  return {
    type:'RESTORE_STATE',
    new_state:new_state,
  };
}

export function loaded(is_loaded = true){
  return {
    type:'LOADED',
    loaded:is_loaded,
  };
}

export function logged(is_logged = true){
  return {
    type:'LOGGED',
    logged:is_logged,
  };
}

export function updateProfile(profile = {}){
  return {
    type:'UPDATE_PROFILE',
    profile:profile,
  };
}

export function updateEmails(emails = []){
  return {
    type:'UPDATE_EMAILS',
    emails:emails,
  };
}

export function updateChats(chats = []){
  return {
    type:'UPDATE_CHATS',
    chats:chats,
  };
}