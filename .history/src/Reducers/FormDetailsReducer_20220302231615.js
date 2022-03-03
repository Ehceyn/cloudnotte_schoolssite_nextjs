export const formInitialState = {
  formDetailsStore: [],
};

function formReducer(state = formInitialState, action) {
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

export default formReducer;
