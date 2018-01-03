export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      const newState = state.friends
        .slice()
        .filter(friend => friend.id !== action.id);
      return { friends: [...newState] };
    default:
      return state;
  }
}
