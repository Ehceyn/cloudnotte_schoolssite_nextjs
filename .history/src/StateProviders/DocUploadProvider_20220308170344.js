// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// THIS IS THE DATA LAYER
export const DocUploadContext = createContext();

// BUILD A PROVIDER
export const DocUploadProvider = (props) => (
  <DocUploadContext.Provider
    value={useReducer(props.reducer, props.initialState)}
  >
    {props.children}
  </DocUploadContext.Provider>
);

export const useDocUploadStateValue = () => useContext(DocUploadContext);
