import { FilterType } from './FilterType';
import { filterList } from '../constant';
import { useContext, useMemo } from 'react';
import { AppContext } from '../contexts/AppProvider';
export const FilterList = () => {
  const { todos } = useContext(AppContext);
  const countByFilterId = useMemo(
    () =>
      todos.reduce(
        (acc, cur) => {
          let newAcc = { ...acc };
          if (cur.isCompleted) {
            newAcc = { ...newAcc, completed: newAcc.completed + 1 };
          }
          if (cur.isImportant) {
            newAcc = { ...newAcc, important: newAcc.important + 1 };
          }
          if (cur.isDeleted) {
            newAcc = { ...newAcc, deleted: newAcc.deleted + 1 };
          }
          return newAcc;
        },
        { all: todos.length, important: 0, completed: 0, deleted: 0 },
      ),
    [todos],
  );
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {filterList.map((filter) => {
        return (
          <FilterType
            filter={filter}
            key={filter.id}
            quantity={countByFilterId[filter.id]}
          />
        );
      })}
    </div>
  );
};
