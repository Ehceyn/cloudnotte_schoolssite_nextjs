export const docInitialState = [];
let dataStore = [];
function docUpload(state = docInitialState, action) {
  //.log(action);
  switch (action.type) {
    case "ADD_TO_DOC_STORE":
      let obj = action.item;
      dataStore.push(obj);
      //.log(dataStore, "The docstore");
      state = dataStore;

      //.log(state, "Added DOC");

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
