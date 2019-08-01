import React, { useState } from 'react';

import { searchVideoById } from '../services/videos';

const SearchBar = () => {
  const [newFilter, setNewFilter] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value);
  };

  const handleNewSearch = (event) => {
    event.preventDefault();
    searchVideoById(newFilter)
      .then((res) => {
        console.log(res);
      });
    setNewFilter('');
  };

  return (
    <form onSubmit={handleNewSearch}>
      search:
      <input value={newFilter} onChange={handleNewFilter} />
    </form>
  );
};

export default SearchBar;
