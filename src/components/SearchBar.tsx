import React from "react";

interface SearchBarProps {
  searchString: string;
  onSearchChange: (value: string) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchString,
  onSearchChange,
  onClear,
}) => {
  return (
    <form className="flex-grow flex">
      <input
        type="text"
        className="form-input rounded-l-md border border-gray-300 p-2 flex-grow"
        placeholder="Buscar por nombre..."
        value={searchString}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r-md"
      >
        Buscar
      </button>
      <button
        type="button"
        onClick={onClear}
        className="ml-2 text-sm text-gray-600 underline"
      >
        Limpiar
      </button>
    </form>
  );
};

export default SearchBar;
