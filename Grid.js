 "use client"
import { useState } from 'react';
import useStore from '../store/useStore';

const Grid = () => {
  const { cells, updateCell } = useStore();
  const [editing, setEditing] = useState(null);

  const handleChange = (row, col, e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      updateCell(row, col, value);
    }
  };
  


 const Cell = ({ value, onChange, onClick, isEditing }) => (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onClick={onClick}
      className={`border border-gray-300 p-2 ${
        isEditing ? "bg-gray-100" : "bg-white"
      }`}
    />
  );
  

  return (
    <div className="grid grid-cols-[repeat(1000,_minmax(0,_1fr))] gap-px border border-gray-300">
      {cells.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            type="text"
            value={cell}
            onChange={(e) => handleChange(rowIndex, colIndex, e)}
            className="border border-gray-300 p-2 text-left"
            onClick={() => setEditing({ row: rowIndex, col: colIndex })}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
