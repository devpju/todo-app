import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';
export const FilterType = ({ filter, quantity }) => {
  const { selectedFilterId, handleSelectFilter } = useContext(AppContext);
  const isSelected = filter.id === selectedFilterId;
  return (
    <div
      className={`${isSelected ? 'bg-[#0F548C]' : ' bg-gray-200'} p-4 rounded-xl flex items-center
        justify-between`}
      onClick={() => handleSelectFilter(filter.id)}
    >
      <div className="flex flex-col gap-4">
        <img className="w-5" src={filter.iconPath} alt={filter.label} />
        <p
          className={`${isSelected ? 'text-white' : 'text-gray-900'} font-semibold text-base`}
        >
          {filter.label}
        </p>
      </div>
      <p
        className={`${isSelected ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}
      >
        {quantity}
      </p>
    </div>
  );
};

FilterType.propTypes = {
  filter: PropTypes.object,
  quantity: PropTypes.number,
};
