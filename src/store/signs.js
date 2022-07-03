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
    signsRequested: (state) => {
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

export const loadsignsList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().signs;
  if (isOutdated(lastFetch)) {
    dispatch(signsRequested());
    try {
      const { content } = await signservice.get();
      dispatch(signsReceived(content));
    } catch (error) {
      dispatch(signsRequestFailed(error.message));
    }
  }
};

export const getsigns = () => (state) => state.signs.entities;
export const getsignsLoadingStatus = () => (state) => state.signs.isLoading;
export const getProfessionById = (id) => (state) => {
  if (state.signs.entities) {
    return state.signs.entities.find((p) => p._id === id);
  }
};

export default signsReducer;
