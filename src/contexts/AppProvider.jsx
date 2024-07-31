import { createContext, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedFilterId, setSelectedFilterId] = useState('all');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [activeTodoId, setActiveTodoId] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleCompletedTodo(todoId) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else return todo;
    });
    setTodos(updatedTodos);
  }

  function handleRemoveTodo(todoId) {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  function handleSelectFilter(filterId) {
    setSelectedFilterId(filterId);
  }

  function addNewTodo(newTodo) {
    setTodos((preTodos) => [...preTodos, newTodo]);
  }

  function handleShowSidebar(todoId) {
    setShowSidebar(true);
    setActiveTodoId(todoId);
  }

  function closeSidebar() {
    setShowSidebar(false);
  }

  function updateTodo(updatedTodo) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) return updatedTodo;
      else return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <AppContext.Provider
      value={{
        selectedCategoryId,
        setSelectedCategoryId,
        selectedFilterId,
        setSelectedFilterId,
        showSidebar,
        setShowSidebar,
        todos,
        setTodos,
        activeTodoId,
        setActiveTodoId,
        searchText,
        setSearchText,
        handleCompletedTodo,
        addNewTodo,
        handleShowSidebar,
        closeSidebar,
        updateTodo,
        handleSelectFilter,
        handleRemoveTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element,
};
