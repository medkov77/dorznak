import { createSlice } from "@reduxjs/toolkit";
import { setCart, getCart } from "../app/services/localStorageService";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    entities: [],
    isLoading: true,
    error: null,
    lastFetch: null,
  },
  reducers: {
    cartUbdated: (state, action) => {
      console.log(action.payload);
      state.entities.push(action.payload);
      setCart(state.entities);
    },
    cartReceived: (state, action) => {
      state.entities = getCart();
    },
    cartRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: cartReducer, actions } = cartSlice;
const { cartUbdated, cartReceived, cartRequestFailed } = actions;

export const ubdateCart = (item) => async (dispatch, getState) => {
  dispatch(cartUbdated(item));
};

export const getcartList = () => (state) => {
  return state.cart.entities;
};

export const getcartLoadingStatus = () => (state) => state.cart.isLoading;

export default cartReducer;
