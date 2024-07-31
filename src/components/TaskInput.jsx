import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppProvider';

export const TaskInput = () => {
  const { addNewTodo } = useContext(AppContext);

  const [todoInput, setTodoInput] = useState('');

  return (
    <div className="flex h-11 items-center gap-2 rounded-md bg-white px-4 shadow-lg">
      <FontAwesomeIcon icon={faPlus} className="text-md text-[#616161]" />

      <input
        type="text"
        name="task-input"
        className="bg-transparent flex-1"
        placeholder="Add new task..."
        value={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const newTodo = {
              id: crypto.randomUUID(),
              title: e.target.value,
              isCompleted: false,
              isImportant: false,
              isDeleted: false,
            };
            addNewTodo(newTodo);
            setTodoInput('');
          }
        }}
      />
    </div>
  );
};
