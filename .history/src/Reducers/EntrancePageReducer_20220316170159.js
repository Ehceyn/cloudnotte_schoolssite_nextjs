export const entrancePageInitialState = "";
function entrancePageReducer(state = entrancePageInitialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_ENTRANCE_PAGE_STORE":
      state = action.item;

      console.log(state, "Added entrancePage");

      return {
        state,
      };

    default:
      return state;
  }
}

export default entrancePageReducer;
