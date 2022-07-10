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
    },
    priceListRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: priceListReducer, actions } = priceListSlice;
const {
  priceListRequested,
  priceListReceived,
  priceListRequestFailed,
  getCurrentPrice,
} = actions;

export const loadPriceListList = () => async (dispatch, getState) => {
  dispatch(priceListRequested());

  try {
    const content = getPricesList();
    dispatch(priceListReceived(content));
  } catch (error) {
    dispatch(priceListRequestFailed(error.message));
  }
};

export const getSignsPrice = () => (state) => {
  return state.priceList.entities.signs;
};
export const getpriceListLoadingStatus = () => (state) =>
  state.priceList.isLoading;

export default priceListReducer;
export { getCurrentPrice };
