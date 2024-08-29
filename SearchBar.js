
import { useState } from 'react';
import useStore from '../store/useStore';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { cells } = useStore();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredCells = cells.flat().filter(cell => cell.includes(query));

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="border border-gray-300 p-2 mb-4"
      />
      {/* Render filtered cells */}
      <div>
        {filteredCells.map((cell, index) => (
          <div key={index}>{cell}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
