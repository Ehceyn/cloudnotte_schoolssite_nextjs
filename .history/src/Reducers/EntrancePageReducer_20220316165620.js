export const entrancePageInitialState = [];
function entrancePage(state = entrancePageInitialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_ENTRANCE_PAGE_STORE":
      let obj = action.item;

      state.push(action.item);

      console.log(dataStore, "The entrancePagestore");

      console.log(state, "Added entrancePage");

      return {
        state,
      };

    default:
      return state;
  }
}

export default entrancePage;
