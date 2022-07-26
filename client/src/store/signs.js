import { createSlice } from "@reduxjs/toolkit";
import signsService from "../app/services/signs.service";
const signsSlice = createSlice({
  name: "signs",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null,
  },
  reducers: {
    signsRequested: (state) => {
      state.isLoading = true;
    },
    signsReceived: (state, action) => {
      state.entities = action.payload;
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
export const loadSigns = () => async (dispatch, getState) => {
  try {
    const { content } = await signsService.get();
    dispatch(signsReceived(content));
  } catch (error) {
    dispatch(signsRequestFailed(error.message));
  }
};

export const getSignsList = () => (state) => {
  return state.signs.entities;
};

export const getSignsLoadingStatus = () => (state) => state.signs.isLoading;

export default signsReducer;
