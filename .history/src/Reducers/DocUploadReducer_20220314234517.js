export const docInitialState = [];
let dataStore = [];
function docUpload(state = docInitialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_DOC_STORE":
      let obj = action.item;
      dataStore.push(obj);
      console.log(dataStore, "The docstore");
      state = dataStore;

      console.log(state, "Added DOC");

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

export default docUpload;
