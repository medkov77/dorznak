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
        priceListRequested: state => {
            state.isLoading = true;
        },
        priceListReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            console.log(action.payload);
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
    const content = getPricesList();
    console.log(content);
    dispatch(priceListReceived(content));
    try {
        const content = getPricesList();
        console.log(content);
        dispatch(priceListReceived(content));
    } catch (error) {
        dispatch(priceListRequestFailed(error.message));
    }
};

export const getPrice = (name, form, size, film) => state => {
    const currentPrice =
        state.priceList.entities[name].form[form].size[size][film];

    console.log("cur", currentPrice, film);
    return currentPrice;
};
export const getpriceListLoadingStatus = () => state =>
    state.priceList.isLoading;

export default priceListReducer;
