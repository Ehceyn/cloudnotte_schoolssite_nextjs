export const formInitialState = [];
let dataStore = [];
function formReducer(state = formInitialState, action) {
  //.log(action);
  switch (action.type) {
    case "ADD_TO_FORM_DETAILS_STORE":
      let obj = action.item;
      dataStore.push(obj);
      //.log(dataStore, "The formstore");
      state = dataStore;

      //.log(state, "Added state");

      return {
        state,
      };

    case "REMOVE_FROM_FORM_DETAILS_STORE":
      dataStore.pop();
      return {
        state,
      };

    default:
      return state;
  }
}

export default formReducer;
