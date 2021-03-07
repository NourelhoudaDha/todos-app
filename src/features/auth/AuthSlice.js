import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    connected: false,
  },
  reducers: {
    connect(state) {
      state.connected = true;
    },
    disconnect(state) {
      state.connected = false;
    },
  },
});

export const { connect, disconnect } = authSlice.actions;

export const selectConnect = ({ auth }) => auth;

export default authSlice.reducer;
