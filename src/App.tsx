import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/type";
import AddTaskForm from "./components/AddTaskForm";
import Item from "./components/Item";

function App() {
  const items = useSelector((state: RootState) => state.todos.items);

  return (
    <div className="p-12 flex gap-2 flex-col">
      <AddTaskForm />
      {items.map((item: string, index: number) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
