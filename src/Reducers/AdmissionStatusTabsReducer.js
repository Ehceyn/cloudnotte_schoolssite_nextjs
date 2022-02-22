export const initialState = 1;

console.log(initialState);

function reducer(state = initialState, action) {
  console.log(action);
  console.log("ITem" + action.item);

  switch (action.type) {
    case "TOGGLE_ADMISSION_STATUS_TAB":
      return action.item;
    default:
      return state;
  }
}

export default reducer;
