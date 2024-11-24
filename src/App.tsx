import { useSelector } from "react-redux";
import "./App.css";
import { RootState, TodoItem } from "./redux/type";
import AddTaskForm from "./components/AddTaskForm";
import Item from "./components/Item";

function App() {
  const items = useSelector((state: RootState) => state.todos.items);

  return (
    <div className="p-12 flex gap-4 flex-col max-w-4xl m-auto min-w-96">
      <AddTaskForm />
      {items.map((item: TodoItem) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
