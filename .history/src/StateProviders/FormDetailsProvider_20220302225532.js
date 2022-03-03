// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// THIS IS THE DATA LAYER
export const WorksContext = createContext();
export const UserContext = createContext();

// BUILD A PROVIDER
export const StateProvider = (props) => (
  <UserContext.Provider value={useReducer(props.reducer, props.initialState)}>
    <WorksContext.Provider
      value={useReducer(props.reducer, props.initialState)}
    >
      {props.children}
    </WorksContext.Provider>
  </UserContext.Provider>
);

export const useWorksStateValue = () => useContext(WorksContext);
export const useUserStateValue = () => useContext(UserContext);
