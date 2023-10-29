import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosConfig, baseUrl } from "./../utils/config";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(`${baseUrl}user/login`, userData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const verifyUser = createAsyncThunk("auth/verify", async (thunkAPI) => {
  try {
    const res = await axios.get(`${baseUrl}user/verify`,axiosConfig);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
  user: {},
  isLoading:false
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Login Sucessfully");
        localStorage.setItem("token", action.payload.token);
        window.location.href = "/admin/analytics";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload?.message);
      })
      .addCase(verifyUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(verifyUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
