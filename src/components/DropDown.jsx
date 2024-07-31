import { categories } from '../constant';
import PropTypes from 'prop-types';
export const DropDown = ({ category, setCategory }) => {
  return (
    <div className="">
      <label
        htmlFor="categories"
        className="block mb-2 font-medium text-gray-700 text-md"
      >
        Category:
      </label>
      <select
        id="categories"
        className="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

DropDown.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func,
};
