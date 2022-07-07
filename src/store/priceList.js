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
    getCurrentPrice: (state, action) => {
      console.log(action.payload, "pay");
      console.log(state);
      const { name, form, size, film } = action.payload;
      return state.entities[name].form[form].size[size][film];
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

export const getPrice = (name, form, size, film) => (state) => {
  const currentPrice =
    state.priceList.entities[name].form[form].size[size][film];
  return currentPrice;
};
export const getpriceListLoadingStatus = () => (state) =>
  state.priceList.isLoading;

export default priceListReducer;
export { getCurrentPrice };
