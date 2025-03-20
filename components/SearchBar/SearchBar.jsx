import React from "react";
import "./SearchBar.scss";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search venues or neighbourhoods"
      value={searchTerm}  
      onChange={onSearchChange}
      className="search-bar"
    />
  );
}

export default SearchBar;
