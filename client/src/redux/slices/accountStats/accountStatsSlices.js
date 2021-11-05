import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";

//featchall accountstats
export const fatchAccountStatsAction = createAsyncThunk(
  "expense/fatch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    //get user token from store
    const userToken = getState()?.users?.userAuth?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
    try {
      //make http call here
      const { data } = await axios.get(`${baseURL}/acounts-statistics`, config);
      //dispatch
      //   dispatch(resetExpCreated());
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//   /slices
const accountsSlice = createSlice({
  name: "account",
  initialState: {},
  extraReducers: (builder) => {
    //   fetch accountStats
    builder.addCase(fatchAccountStatsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fatchAccountStatsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.accountsDetails = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
      state.isExpCreated = false;
    });
    builder.addCase(fatchAccountStatsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.msg;
      state.serverErr = action?.error?.msg;
    });
  },
});

export default accountsSlice.reducer;
