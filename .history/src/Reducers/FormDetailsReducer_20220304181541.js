export const formInitialState = [];
let dataStore = [];
function formReducer(state = formInitialState, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_FORM_DETAILS_STORE':
      let obj = action.item;
      dataStore.push(obj);
      console.log(dataStore, 'The formstore');
      if (dataStore.length === 2) state = dataStore;

      console.log(state, 'Added state');

      return {
        state,
      };

    case 'REMOVE_FROM_FORM_DETAILS_STORE':
      dataStore.pop();
      return {
        state,
      };

    default:
      return state;
  }
}

export default formReducer;
