import { useDispatch } from 'react-redux';
import { FormEvent, useState } from 'react';
import { add } from '../store/todosSlice';
import Button from './core/Button';

const AddTaskForm = () => {
  const [itemName, setItemName] = useState('');
  const dispatch = useDispatch();
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault && e.preventDefault();
    addItem();
  };

  const addItem = () => {
    if (!itemName) return;
    dispatch(add(itemName));
    setItemName('');
  };

  return (
    <form
      className="flex w-full items-center justify-center gap-2"
      onSubmit={onSubmitHandler}
    >
      <input
        className="text-grey-darker mr-4 w-full appearance-none rounded border px-3 py-2 shadow"
        placeholder="Add Todo"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <Button onClick={addItem}>Add</Button>
    </form>
  );
};

export default AddTaskForm;
