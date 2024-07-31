import { FilterPanel } from './components/FilterPanel';
import { MainContent } from './components/MainContent';
import { SideBar } from './components/SideBar';
import { useContext } from 'react';
import { AppContext } from './contexts/AppProvider';

function App() {
  const { showSidebar } = useContext(AppContext);
  return (
    <div className="flex">
      <FilterPanel />

      <MainContent />

      {showSidebar && <SideBar />}
    </div>
  );
}

export default App;
