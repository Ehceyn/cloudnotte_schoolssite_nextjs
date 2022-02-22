// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// THIS IS THE DATA LAYER
export const EnrollmentTabsContext = createContext();

// BUILD A PROVIDER
export const EnrollmentTabsProvider = (props) => (
  <EnrollmentTabsContext.Provider
    value={useReducer(props.reducer, props.initialState)}
  >
    {props.children}
  </EnrollmentTabsContext.Provider>
);

export const useEnrollmentTabsValue = () => useContext(EnrollmentTabsContext);
