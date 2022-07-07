import { combineReducers, configureStore } from "@reduxjs/toolkit";
import priceListReducer from "./priceList";
import signsReducer from "./signs";

const rootReducer = combineReducers({
    priceList: priceListReducer,
    signs: signsReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
