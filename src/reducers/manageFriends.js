export function manageFriends(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      const newState = { ...state };
      newState.friends.push(action.friend);
      return newState;
      break;
    case 'REMOVE_FRIEND':
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.id)
      };
      break;
    default:
      return state;
  }
}
