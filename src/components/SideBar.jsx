import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { DropDown } from './DropDown';
import { AppContext } from '../contexts/AppProvider';
export const SideBar = () => {
  const { todos, activeTodoId, updateTodo, closeSidebar } =
    useContext(AppContext);
  const activeTodo = todos.find((todo) => todo.id === activeTodoId);
  const [title, setTitle] = useState(activeTodo.title);
  const [isImportant, setIsImportant] = useState(activeTodo.isImportant);
  const [isCompleted, setIsCompleted] = useState(activeTodo.isCompleted);
  const [category, setCategory] = useState(activeTodo.category);
  return (
    <div
      className="fixed top-0 right-0 left-2/3 bottom-0 shadow-2xl bg-[#F5F5F5] p-6 flex flex-col
        justify-between"
    >
      <form className="flex h-full flex-col gap-5">
        <input
          type="text"
          name="edit-todo-input"
          className="h-8 bg-white rounded-lg flex items-center px-4"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="h-8 bg-white rounded-lg flex items-center px-4 justify-between">
          <label htmlFor="important" className="">
            Is important?
          </label>
          <input
            type="checkbox"
            name="important-checkbox"
            id="important"
            checked={isImportant}
            onChange={() => {
              setIsImportant(!isImportant);
            }}
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600
              dark:bg-gray-700 dark:ring-offset-gray-800"
          />
        </div>
        <div className="h-8 bg-white rounded-lg flex items-center px-4 justify-between">
          <label htmlFor="completed" className="">
            Is completed?
          </label>
          <input
            type="checkbox"
            name="completed-checkbox"
            id="completed"
            checked={isCompleted}
            onChange={() => {
              setIsCompleted(!isCompleted);
            }}
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600
              dark:bg-gray-700 dark:ring-offset-gray-800"
          />
        </div>
        <DropDown category={category} setCategory={setCategory} />
      </form>
      <div className="flex items-center gap-5">
        <button
          className="font-semi-bold flex-1 bg-white text-blue-600 h-10 rounded-md text-lg"
          onClick={closeSidebar}
        >
          Cancel
        </button>
        <button
          className="font-semi-bold flex-1 bg-blue-600 text-white h-10 rounded-md text-lg"
          onClick={() => {
            const newTodo = {
              id: activeTodoId,
              title,
              isCompleted,
              isImportant,
              isDeleted: false,
              category,
            };
            updateTodo(newTodo);
            closeSidebar();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  activeTodoId: PropTypes.string,
  todos: PropTypes.array,
  updateTodo: PropTypes.func,
  closeSidebar: PropTypes.func,
};
