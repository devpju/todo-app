import { useContext } from 'react';
import { Categories } from './Categories';
import { FilterList } from './FilterList';
import { Search } from './Search';
import { AppContext } from '../contexts/AppProvider';

export const FilterPanel = () => {
  const { searchText, setSearchText } = useContext(AppContext);

  return (
    <div className="flex-1 p-5">
      <Search searchText={searchText} setSearchText={setSearchText} />
      <FilterList />
      <Categories />
    </div>
  );
};
