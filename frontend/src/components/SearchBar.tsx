import { faClose, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface SearchBarProps {
  rounded: "small" | "medium" | "large" | "full";
  width?: string;
  suggestions?: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({
  rounded = "small",
  width = "500px",
  suggestions = [],
}) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      const newHistory = [...new Set([query, ...searchHistory])];
      setSearchHistory(newHistory);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
      setQuery("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);

    if (suggestions.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    const newHistory = [...new Set([suggestion, ...searchHistory])];
    setSearchHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    setQuery(suggestion);
    setFilteredSuggestions([]);
  };

  const removeSuggestion = (suggestionToRemove: string) => {
    const newHistory = searchHistory.filter(
      (item) => item !== suggestionToRemove
    );
    setQuery("");
    setSearchHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));
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
          onChange={handleInputChange}
          className={`w-full pr-12 rounded-${roundedValue[rounded]} border border-solid border-neutral-300 bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
          placeholder="Buscar..."
          aria-label="Buscar..."
          id="search-field"
          aria-describedby="button-search"
          autoComplete="off"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 h-full px-4 py-2 bg-primary text-gray-700 flex items-center justify-center"
          id="button-search"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

        {query && suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 mt-1 bg-white border border-neutral-300 rounded shadow-lg z-10">
            {searchHistory.map((historyItem, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-2 hover:bg-gray-200"
              >
                <a href={`#${historyItem}`} className="text-purple-600">
                  {historyItem}
                </a>
                <button
                  onClick={() => removeSuggestion(historyItem)}
                  className="text-gray-600 hover:text-red-600"
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </li>
            ))}
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <span className="block">{suggestion}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
