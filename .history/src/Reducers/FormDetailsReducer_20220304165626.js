export const formInitialState = [];
let dataStore = [];
function formReducer(state = formInitialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_FORM_DETAILS_STORE":
      let obj = {
        id: action.item.id,
        form: action.item.appendedForm,
      };

      dataStore.push(obj);
      console.log(dataStore, "The sdatebj");
      if (action.item.id === 1) state = dataStore;

      // state[action.item.id] = action.item.appendedForm;
      // state.push({ction.item.id:action.item.appendedForm})
      console.log(state, "Added state");

      return {
        state,
      };

    case "REMOVE_FROM_FORM_DETAILS_STORE":
      state[action.item.id] = "";
      return {
        state,
      };

    default:
      return state;
  }
}

export default formReducer;
