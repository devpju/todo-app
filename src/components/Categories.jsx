import { useContext, useMemo } from 'react';
import { categories } from '../constant';
import { Category } from './Category';
import { AppContext } from '../contexts/AppProvider';
export const Categories = () => {
  const { todos } = useContext(AppContext);
  const countByCategoryId = useMemo(
    () =>
      todos.reduce(
        (acc, cur) => ({ ...acc, [cur.category]: acc[cur.category] + 1 }),
        { personal: 0, company: 0, travel: 0, idea: 0 },
      ),
    [todos],
  );
  return (
    <div className="mt-10 text-gray-400 text-lg">
      <p className="">Categories</p>
      <div className="flex flex-col gap-2 mt-3">
        {categories.map((category) => (
          <Category
            category={category}
            key={category.id}
            quantity={countByCategoryId[category.id]}
          />
        ))}
      </div>
    </div>
  );
};
