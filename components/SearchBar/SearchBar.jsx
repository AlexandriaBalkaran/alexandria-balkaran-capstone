import React from "react";
import "./SearchBar.scss";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar__container">
      <input
        type="text"
        placeholder="Search venues or neighbourhoods"
        value={searchTerm}
        onChange={onSearchChange}
        className="search-bar"
      />
    </div>
  );
}

export default SearchBar;
