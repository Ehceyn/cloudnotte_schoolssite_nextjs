// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// THIS IS THE DATA LAYER
export const EntrancePageContext = createContext();

// BUILD A PROVIDER
export const EntrancePageProvider = (props) => (
  <EntrancePageContext.Provider
    value={useReducer(props.reducer, props.initialState)}
  >
    {props.children}
  </EntrancePageContext.Provider>
);

export const useEntrancePageStateValue = () => useContext(EntrancePageContext);
