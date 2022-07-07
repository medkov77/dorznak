import { createSlice } from "@reduxjs/toolkit";
import getPricesList from "../app/api/price";
const priceListSlice = createSlice({
  name: "priceList",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null,
  },
  reducers: {
    priceListRequested: (state) => {
      state.isLoading = true;
    },
    priceListReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      console.log(state.entities);
    },
    priceListRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: priceListReducer, actions } = priceListSlice;
const { priceListRequested, priceListReceived, priceListRequestFailed } =
  actions;

export const loadPriceListList = () => async (dispatch, getState) => {
  dispatch(priceListRequested());
  try {
    const content = getPricesList();
    dispatch(priceListReceived(content));
  } catch (error) {
    dispatch(priceListRequestFailed(error.message));
  }
};

export const getPrice = (name, form, size, film) => (state) =>
  state.entities ? state.entities[name][form][size][film] : 0;
export const getpriceListLoadingStatus = () => (state) =>
  state.priceList.isLoading;
export const getProfessionById = (id) => (state) => {
  if (state.priceList.entities) {
    return state.priceList.entities.find((p) => p._id === id);
  }
};

export default priceListReducer;
