import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState, TodoItem } from "./redux/type";
import AddTaskForm from "./components/AddTaskForm";
import Item from "./components/Item";

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { swap } from "./redux/todosSlice";

function App() {
  const items = useSelector((state: RootState) => state.todos.items);

  const dispatch = useDispatch();
  const onDrapEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    dispatch(
      swap({
        sourceIndex: source.index,
        destinationIndex: destination.index,
      })
    );
  };

  return (
    <div className="p-12 flex flex-col gap-8 max-w-4xl m-auto min-w-96">
      <AddTaskForm />
      <DragDropContext onDragEnd={onDrapEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col gap-4"
            >
              {items.map((item: TodoItem) => (
                <Item key={item.id} item={item} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
