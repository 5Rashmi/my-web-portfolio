import React from "react";
import type { SearchProps } from "../../types/searchProps";

const Search: React.FC<SearchProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 rounded bg-gray-800 text-white"
    />
  );
};

export default Search;
