// types.ts

export type TodoItem = {
  id: string;
  name: string;
  completed: boolean;
  index: number;
};

export interface TodosState {
  items: TodoItem[];
}

export interface RootState {
  todos: TodosState;
}
