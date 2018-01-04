export function managePresents(state, action) {
  if (action.type === "INCREASE") {
    return { numberOfPresents: state.numberOfPresents + 1 };
  } else {
    return { numberOfPresents: state.numberOfPresents };
  }
}
// function changeState(state, action) {
//   if (action.type === 'INCREASE_COUNT') {
//     return {count: state.count + 1 }
//   }
// }
