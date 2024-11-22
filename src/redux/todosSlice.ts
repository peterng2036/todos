import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type todosSlice = {
  items: string[];
};

const getInitialState = (): todosSlice => {
  let todos = [] as string[];
  const todosFromLocalStorage = localStorage.getItem("todos");
  if (todosFromLocalStorage) {
    todos = JSON.parse(todosFromLocalStorage) as string[];
  }

  return {
    items: todos,
  };
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: getInitialState(),
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.items = [...state.items, action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.items.indexOf(action.payload);
      state.items.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      () => true,
      (state) => {
        localStorage.setItem("todos", JSON.stringify(state.items));
      }
    );
  },
});

export const { add, remove } = todosSlice.actions;
export default todosSlice.reducer;
