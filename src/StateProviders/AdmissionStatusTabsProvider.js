// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// THIS IS THE DATA LAYER
export const AdmissionStatusTabsContext = createContext();

// BUILD A PROVIDER
export const AdmissionStatusTabsProvider = (props) => (
  <AdmissionStatusTabsContext.Provider
    value={useReducer(props.reducer, props.initialState)}
  >
    {props.children}
  </AdmissionStatusTabsContext.Provider>
);

export const useAdmissionStatusTabsValue = () =>
  useContext(AdmissionStatusTabsContext);
