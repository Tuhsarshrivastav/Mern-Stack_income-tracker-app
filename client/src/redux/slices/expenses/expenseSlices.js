import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";

//Create action
export const createExpAction = createAsyncThunk(
  "expense/create",
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
      const { data } = await axios.post(`${baseURL}/expense`, payload, config);
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

//featchall action
export const fatchAllExpAction = createAsyncThunk(
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
      const { data } = await axios.get(
        `${baseURL}/expense?page=${payload}`,

        config
      );
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

//slices
const expenseSlice = createSlice({
  name: "expenses",
  initialState: {},
  extraReducers: (builder) => {
    //   Create Expense
    builder.addCase(createExpAction.pending, (state, action) => {
      state.loading = true;
    });
    //reset action
    // builder.addCase(resetExpCreated, (state, acyion) => {
    //   state.isExpCreated = true;
    // });
    builder.addCase(createExpAction.fulfilled, (state, action) => {
      state.loading = false;
      state.expenseCreated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
      state.isExpCreated = false;
    });
    builder.addCase(createExpAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.msg;
      state.serverErr = action?.error?.msg;
    });
    //   fetch all Expense
    builder.addCase(fatchAllExpAction.pending, (state, action) => {
      state.loading = true;
    });
    //reset action
    // builder.addCase(resetExpCreated, (state, acyion) => {
    //   state.isExpCreated = true;
    // });
    builder.addCase(fatchAllExpAction.fulfilled, (state, action) => {
      state.loading = false;
      state.expenseList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
      state.isExpCreated = false;
    });
    builder.addCase(fatchAllExpAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.msg;
      state.serverErr = action?.error?.msg;
    });
  },
});

export default expenseSlice.reducer;
