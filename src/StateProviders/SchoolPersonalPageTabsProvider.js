// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// THIS IS THE DATA LAYER
export const SchoolPersonalPageTabsContext = createContext();

// BUILD A PROVIDER
export const SchoolPersonalPageTabsProvider = (props) => (
  <SchoolPersonalPageTabsContext.Provider
    value={useReducer(props.reducer, props.initialState)}
  >
    {props.children}
  </SchoolPersonalPageTabsContext.Provider>
);

export const useSchoolPersonalPageTabsValue = () =>
  useContext(SchoolPersonalPageTabsContext);
