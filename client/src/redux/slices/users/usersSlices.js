import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Login action
export const loginUserAction = createAsyncThunk(
  "user/login",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      // make http call here
      const { data } = await axios.post(
        "localhost:5000/api/users/register",
        payload,
        config
      );
      return data;
    } catch (error) {
      if (!error && !error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
