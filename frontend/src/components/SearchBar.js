import React from 'react';

const SearchBar = ({ newFilter, handleNewFilter, handleNewSearch }) => {
  return (
    <form onSubmit={handleNewSearch}>
      search:
      <input value={newFilter} onChange={handleNewFilter} />
    </form>
  );
};

export default SearchBar;
