export const initialState = {
  formDetailsStore: localStorage.getItem("formDetails")
    ? JSON.parse(localStorage.getItem("formDetails"))
    : [],
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_FORM_DETAILS_STORE":
      return {
        ...state,
        formDetailsStore: [...state.formDetailsStore, action.item],
      };

    default:
      return state;
  }
}

export default reducer;
