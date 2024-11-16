// types.ts
export interface TodosState {
  items: string[];
}

export interface RootState {
  todos: TodosState;
}
