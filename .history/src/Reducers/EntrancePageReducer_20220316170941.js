export const entrancePageInitialState = [];
let dataStore = [];
function entrancePageReducer(state = entrancePageInitialState, action) {
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

    case "REMOVE_FROM_DOC_STORE":
      dataStore.pop();
      return {
        state,
      };

    default:
      return state;
  }
}

export default entrancePageReducer;
