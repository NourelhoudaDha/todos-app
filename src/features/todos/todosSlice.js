import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add(state, { payload }) {
      state.push({ ...payload, status: "todo" });
    },
    del(state, { payload: index }) {
      state.splice(index, 1);
    },
    update(state, { payload: { index, status } }) {
      state[index].status = status;
    },
  },
});

export const { add, del, update } = todoSlice.actions;

export const selectTodos = ({ todos }) => todos;

export default todoSlice.reducer;
