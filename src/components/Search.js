import React from "react";
import '../styles/search.css';

const Search = ({searchInput, onUpdateSearchInput, onSubmit}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
      <form className="search-form" onSubmit={e => handleFormSubmit(e)}>
        <input
          type="text"
          className="city-input"
          placeholder="Enter city name"
          value={searchInput}
          onChange={e => onUpdateSearchInput(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form> 
  );
};

export default Search;
