export const initialState = 1;

//.log(initialState);

function reducer(state = initialState, action) {
  //.log(action);
  //.log("ITem" + action.item);

  switch (action.type) {
    case "TOGGLE_ENROLLMENT_TAB":
      return action.item;
    default:
      return state;
  }
}

export default reducer;
