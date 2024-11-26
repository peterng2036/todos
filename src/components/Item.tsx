import { useDispatch } from "react-redux";
import { remove, toggleComplete } from "../redux/todosSlice";
import { TodoItem } from "../redux/type";
import { Draggable } from "@hello-pangea/dnd";

const Item = ({ item }: { item: TodoItem }) => {
  const dispatch = useDispatch();
  const onCompleteCheckHandler = () => {
    dispatch(toggleComplete(item.id));
  };

  return (
    <Draggable draggableId={item.id} index={item.index}>
      {(provided, snapshot) => (
        <div
          className="rounded overflow-hidden border-orange-200 border w-full p-4 flex"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="inline-flex items-center">
            <label
              className="flex items-center cursor-pointer relative"
              htmlFor={`check-${item.id}`}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={onCompleteCheckHandler}
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-orange-300 checked:bg-orange-500 checked:border-orange-600"
                id={`check-${item.id}`}
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
              className={`cursor-pointer ml-2 text-slate-600 ${
                item.completed ? "line-through" : ""
              }`}
              htmlFor={`check-${item.id}`}
            >
              {item.name}
            </label>
          </div>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-auto"
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
