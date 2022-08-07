import { createSlice } from "@reduxjs/toolkit";
import signsService from "../app/services/signs.service";
const signsSlice = createSlice({
  name: "signs",
  initialState: {
    entities: null,
    isLoading: true,
    CurrentSignisLoading: true,
    error: null,
    lastFetch: null,
    size: 1,
    currentSing: null,
  },

  reducers: {
    signsRequested: (state) => {
      state.isLoading = true;
    },
    currentSignsRequested: (state) => {
      state.CurrentSignisLoading = true;
    },
    signsReceived: (state, action) => {
      state.entities = action.payload.list;
      state.size = action.payload.size;
      state.isLoading = false;
    },
    signsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    currentSignsReceived: (state, action) => {
      state.currentSing = action.payload;
      state.CurrentSignisLoading = false;
    },
  },
});

const { reducer: signsReducer, actions } = signsSlice;
const {
  signsRequested,
  signsReceived,
  signsRequestFailed,
  currentSignsRequested,
  currentSignsReceived,
} = actions;
export const loadSigns = (page) => async (dispatch, getState) => {
  dispatch(signsRequested);
  try {
    const { content } = await signsService.get(page);
    dispatch(signsReceived(content));
  } catch (error) {
    dispatch(signsRequestFailed(error.message));
  }
};

export const loadCurrentSign = (id) => async (dispatch, getState) => {
  dispatch(currentSignsRequested);
  try {
    const { content } = await signsService.getCurrent(id);
    dispatch(currentSignsReceived(content));
  } catch (error) {
    dispatch(signsRequestFailed(error.message));
  }
};

export const getSignsList = () => (state) => {
  return state.signs.entities;
};
export const getCurrentSign = () => (state) => {
  return state.signs.currentSing;
};
export const getListSize = () => (state) => {
  return state.signs.size;
};
export const getSignsLoadingStatus = () => (state) => state.signs.isLoading;
export const getCurrentSignsLoadingStatus = () => (state) =>
  state.signs.CurrentSignisLoading;

export default signsReducer;
