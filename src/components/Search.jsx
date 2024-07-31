import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export const Search = ({ searchText, setSearchText }) => {
  return (
    <div
      className="flex bg-gray-100 items-center border border-solid border-gray-300 h-9 gap-2 px-2
        rounded-md"
    >
      <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
      <input
        autoComplete="false"
        type="text"
        name="input-search"
        id="input-search"
        placeholder="Search..."
        className="flex-1"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText && (
        <FontAwesomeIcon
          icon={faClose}
          className="text-lg"
          onClick={() => setSearchText('')}
        />
      )}
    </div>
  );
};

Search.propTypes = {
  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
};
