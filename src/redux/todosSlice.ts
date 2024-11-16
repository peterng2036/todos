import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type todosSlice = {
  items: string[];
};

const initialState: todosSlice = {
  items: ["item 1", "item 2"],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.items = [...state.items, action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.items.indexOf(action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { add, remove } = todosSlice.actions;
export default todosSlice.reducer;
