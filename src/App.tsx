import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState, TodoItem } from './store/type';
import AddTaskForm from './components/AddTaskForm';
import Item from './components/Item';

import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import { swap } from './store/todosSlice';

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
    <div className="m-auto flex min-w-96 max-w-4xl flex-col gap-8 p-12">
      <AddTaskForm />
      <DragDropContext onDragEnd={onDrapEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
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
