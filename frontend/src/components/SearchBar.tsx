import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface SearchBarProps {
  rounded: "small" | "medium" | "large" | "full";
  width?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  rounded = "small",
  width = "500px",
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const roundedValue = {
    small: "sm",
    medium: "md",
    large: "lg",
    full: "full",
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center items-center">
      <div className="relative" style={{ width }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`w-full pr-12 rounded-${roundedValue[rounded]} border border-solid border-neutral-300 bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
          placeholder="Buscar..."
          aria-label="Buscar..."
          id="search-field"
          aria-describedby="button-search"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 h-full px-4 py-2 bg-primary text-gray-700  flex items-center justify-center"
          id="button-search"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
