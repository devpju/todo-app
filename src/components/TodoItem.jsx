import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';
export const TodoItem = ({ todo }) => {
  const { handleShowSidebar, handleCompletedTodo, handleRemoveTodo } =
    useContext(AppContext);
  return (
    <div
      className="flex h-11 items-center gap-2 rounded-md bg-white px-4 shadow-lg cursor-default"
      onClick={() => {
        handleShowSidebar(todo.id);
      }}
    >
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600
          dark:bg-gray-700 dark:ring-offset-gray-800"
        checked={todo.isCompleted}
        onChange={() => handleCompletedTodo(todo.id)}
        onClick={(e) => e.stopPropagation()}
      />
      <p
        className={`flex-1 ${todo.isCompleted && 'line-through'} text-ellipsis `}
      >
        {todo.title}
      </p>
      {todo.isImportant && (
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      )}
      <FontAwesomeIcon
        icon={faTrash}
        className="text-red-500"
        onClick={(e) => {
          e.stopPropagation();
          handleRemoveTodo(todo.id);
        }}
      />
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  handleCompletedTodo: PropTypes.func,
  handleShowSidebar: PropTypes.func,
};
