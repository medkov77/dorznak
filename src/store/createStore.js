import { combineReducers, configureStore } from "@reduxjs/toolkit";
import priceListReducer from "./priceList";

const rootReducer = combineReducers({
  price: priceListReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
