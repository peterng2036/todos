import { useDispatch } from 'react-redux';
import { remove, toggleComplete } from '../store/todosSlice';
import { TodoItem } from '../store/type';
import { Draggable } from '@hello-pangea/dnd';

const Item = ({ item }: { item: TodoItem }) => {
  const dispatch = useDispatch();
  const onCompleteCheckHandler = () => {
    dispatch(toggleComplete(item.id));
  };

  return (
    <Draggable draggableId={item.id} index={item.index}>
      {(provided) => (
        <div
          className="flex w-full overflow-hidden rounded border border-orange-200 p-4"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center"
              htmlFor={`check-${item.id}`}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={onCompleteCheckHandler}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-orange-300 shadow transition-all checked:border-orange-600 checked:bg-orange-500 hover:shadow-md"
                id={`check-${item.id}`}
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className={`ml-2 cursor-pointer text-slate-600 ${
                item.completed ? 'line-through' : ''
              }`}
              htmlFor={`check-${item.id}`}
            >
              {item.name}
            </label>
          </div>
          <button
            className="ml-auto inline-flex items-center rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
            onClick={() => dispatch(remove(item.id))}
          >
            <span>X</span>
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Item;
