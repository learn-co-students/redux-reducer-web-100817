export function manageFriends(state = { friends: [] }, action) {
  if (action.type === "ADD_FRIEND") {
    let newFriends = Object.assign({}, state, {
      friends: [...state.friends, action.friend]
    });
    return newFriends;
  } else if (action.type === "REMOVE_FRIEND") {
    let indexToRemove = state.friends.findIndex(
      friend => friend.id === action.id
    );
    let newFriends = Object.assign({}, state, {
      friends: [
        ...state.friends.slice(0, indexToRemove),
        ...state.friends.slice(indexToRemove + 1)
      ]
    });
    return newFriends;
  } else {
    return { friends: state.friends };
  }
}

// Error: Expected { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Joe', hometown: 'Boston', id: 101 }, { name: 'Steven', hometown: 'Philadephia', id: 102 } ] }
// to equal { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Steven', hometown: 'Philadephia', id: 102 } ] }
