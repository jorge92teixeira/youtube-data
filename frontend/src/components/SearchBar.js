import React from 'react';
import propTypes from 'prop-types';

const SearchBar = ({ newFilter, handleNewFilter, handleNewSearch }) => (
  <form onSubmit={handleNewSearch}>
    search:
    <input value={newFilter} onChange={handleNewFilter} />
  </form>
);

SearchBar.propTypes = {
  newFilter: propTypes.string.isRequired,
  handleNewFilter: propTypes.func.isRequired,
  handleNewSearch: propTypes.func.isRequired,
};

export default SearchBar;
