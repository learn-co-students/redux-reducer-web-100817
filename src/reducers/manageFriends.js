export function manageFriends(state, action) {
  if (action.type === "ADD_FRIEND") {
    return {
      ...state,
      friends: [...state.friends, action.friend]
    };
  } else if (action.type === "REMOVE_FRIEND") {
    let index = state.friends.findIndex(friend => friend.id === action.id);
    return {
      ...state,
      friends: [
        ...state.friends.slice(0, index),
        ...state.friends.slice(index + 1)
      ]
    };
  } else return state;
}
