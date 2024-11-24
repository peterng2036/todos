import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "./type";

type todosSlice = {
  items: TodoItem[];
};

function isTodo(obj: any): obj is TodoItem {
  return (
    typeof obj.id === "string" &&
    typeof obj.name === "string" &&
    typeof obj.completed === "boolean"
  );
}

const getInitialState = (): todosSlice => {
  let todos = [] as TodoItem[];
  const todosFromLocalStorage = localStorage.getItem("todos");
  if (todosFromLocalStorage) {
    const data = JSON.parse(todosFromLocalStorage);
    if (Array.isArray(data) && data.every((x) => isTodo(x))) {
      todos = data;
    }
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
      const newTodoItem: TodoItem = {
        id: nanoid(),
        name: action.payload,
        completed: false,
      };

      state.items.push(newTodoItem);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.completed = !item.completed;
      }
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

export const { add, remove, toggleComplete } = todosSlice.actions;
export default todosSlice.reducer;
