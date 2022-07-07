import { createSlice } from "@reduxjs/toolkit";

const signsSlice = createSlice({
    name: "signs",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null,
    },
    reducers: {
        signsRequested: state => {
            state.isLoading = true;
        },
        signsReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        signsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

const { reducer: signsReducer, actions } = signsSlice;
const { signsRequested, signsReceived, signsRequestFailed } = actions;

export default signsReducer;
