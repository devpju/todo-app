import { useContext, useMemo } from 'react';
import { TodoItem } from './TodoItem';
import { AppContext } from '../contexts/AppProvider';

export const TodoList = () => {
  const { selectedCategoryId, todos, selectedFilterId, searchText } =
    useContext(AppContext);

  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) => {
        if (!todo.title.includes(searchText)) return false;
        if (selectedCategoryId && selectedCategoryId !== todo.category)
          return false;
        switch (selectedFilterId) {
          case 'all':
            return true;
          case 'important':
            return todo.isImportant;
          case 'completed':
            return todo.isCompleted;
          case 'deleted':
            return todo.isDeleted;
          default:
            return true;
        }
      }),
    [selectedFilterId, todos, searchText, selectedCategoryId],
  );
  return (
    <div className="mt-2 flex flex-col gap-2">
      {filteredTodos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};
