import React, { useState } from "react";
import Search from "./Search";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Search
        type="text"
        placeholder=""
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white ronded">
        Go
      </button>
    </form>
  );
};

export default SearchBar;
