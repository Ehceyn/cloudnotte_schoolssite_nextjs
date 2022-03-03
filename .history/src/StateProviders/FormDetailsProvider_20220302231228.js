// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// THIS IS THE DATA LAYER
export const FormDetailsContext = createContext();

// BUILD A PROVIDER
export const FormDetailsProvider = (props) => (
  <FormDetailsContext.Provider
    value={useReducer(props.reducer, props.initialState)}
  >
    {props.children}
  </FormDetailsContext.Provider>
);

export const useFormDetailsStateValue = () => useContext(FormDetailsContext);
