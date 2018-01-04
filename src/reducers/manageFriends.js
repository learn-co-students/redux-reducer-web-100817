export function manageFriends(
  state = { friends: [{ name: 'Avi', hometown: 'NYC', id: 100 }] },
  action
) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [...state.friends, action.friend]
      });

    case 'REMOVE_FRIEND': {
      const remover = state.friends.findIndex(
        friend => friend.id === action.id
      );
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, remover),
          ...state.friends.slice(remover + 1)
        ]
      });
    }

    default:
      return state;
  }
}
