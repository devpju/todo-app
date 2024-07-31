import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';
export const Category = ({ category, quantity }) => {
  const { selectedCategoryId, setSelectedCategoryId } = useContext(AppContext);
  return (
    <div
      className={` ${selectedCategoryId === category.id && 'bg-gray-200 px-4'} rounded-lg flex
        items-center gap-3 cursor-default`}
      onClick={() => {
        if (category.id === selectedCategoryId) {
          setSelectedCategoryId(undefined);
          return;
        }
        setSelectedCategoryId(category.id);
      }}
    >
      <FontAwesomeIcon icon={faFolder} />
      <p className="text-gray-800 select-none font-semibold">
        {category.label}
      </p>
      <p className="ml-auto select-none">{quantity}</p>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
  quantity: PropTypes.number,
};
