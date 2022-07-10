import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import priceListReducer from "./priceList";
import signsReducer from "./signs";

const rootReducer = combineReducers({
  priceList: priceListReducer,
  signs: signsReducer,
  cart: cartReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
