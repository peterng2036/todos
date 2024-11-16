import { useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "../redux/todosSlice";

const AddTaskForm = () => {
  const [itemName, setItemName] = useState("");
  const dispatch = useDispatch();
  const handler = () => {
    if (!itemName) return;
    dispatch(add(itemName));
    setItemName("");
  };

  return (
    <div className="flex w-full gap-2 items-center justify-center">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button
        onClick={handler}
        type="button"
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Add
      </button>
    </div>
  );
};

export default AddTaskForm;
