export const entrancePageInitialState = [];
let dataStore = [];
function entrancePage(state = entrancePageInitialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_ENTRANCE_PAGE_STORE":
      let obj = action.item;
      dataStore.push(obj);
      console.log(dataStore, "The entrancePagestore");
      state = dataStore;

      console.log(state, "Added entrancePage");

      return {
        state,
      };

    default:
      return state;
  }
}

export default entrancePage;
