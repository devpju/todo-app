import { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initTodos = [
    {
      id: '1',
      title: 'Đi học thêm',
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
      category: 'personal',
    },
    {
      id: '2',
      title: 'Mua sách mới',
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
      category: 'company',
    },
    {
      id: '3',
      title: 'Làm bài tập về nhà',
      isImportant: true,
      isCompleted: true,
      isDeleted: false,
      category: 'personal',
    },
    {
      id: '4',
      title: 'Tập thể dục',
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
      category: 'personal',
    },
    {
      id: '5',
      title: 'Đọc sách',
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
      category: 'travel',
    },
    {
      id: '6',
      title: 'Chuẩn bị bữa tối',
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
      category: 'personal',
    },
    {
      id: '7',
      title: 'Học tiếng Anh',
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
      category: 'company',
    },
    {
      id: '8',
      title: 'Dọn dẹp nhà cửa',
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
      category: 'personal',
    },
    {
      id: '9',
      title: 'Đi mua sắm',
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
      category: 'personal',
    },
    {
      id: '10',
      title: 'Chơi thể thao',
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
      category: 'travel',
    },
    {
      id: '11',
      title: 'Thăm gia đình',
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
      category: 'travel',
    },
    {
      id: '12',
      title: 'Nghe nhạc',
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
      category: 'idea',
    },
  ];

  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedFilterId, setSelectedFilterId] = useState('all');
  const [todos, setTodos] = useState(initTodos);
  const [activeTodoId, setActiveTodoId] = useState('');
  const [searchText, setSearchText] = useState('');

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
