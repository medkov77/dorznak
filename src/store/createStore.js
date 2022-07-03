import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  signs: signsReducer,
  idn: idnReducer,
  base: baseReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
