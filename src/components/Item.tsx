import { useDispatch } from "react-redux";
import { remove } from "../redux/todosSlice";

const Item = ({ item }: { item: string }) => {
  const dispatch = useDispatch();

  return (
    <div className="rounded overflow-hidden border-orange-200 border w-full">
      <div className="px-6 py-4 flex justify-between items-center">
        <p className="text-gray-700 text-base">{item}</p>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={() => dispatch(remove(item))}
        >
          <span>X</span>
        </button>
      </div>
    </div>
  );

  // return <h1 onClick={() => dispatch(remove(item))}>{item}</h1>;
};

export default Item;
