import React, { useState } from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

import { searchVideoById } from '../services/videos';

const Search = () => {
  const [newFilter, setNewFilter] = useState('');
  const [searchData, setSearchData] = useState([]);

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value);
  };

  const handleNewSearch = (event) => {
    event.preventDefault();
    searchVideoById(newFilter)
      .then((res) => {
        setSearchData(res);
      });
    setNewFilter('');
  };

  return (
    <div>
      <SearchBar
        newFilter={newFilter}
        handleNewFilter={handleNewFilter}
        handleNewSearch={handleNewSearch}
      />
      <SearchResults
        searchData={searchData}
      />
    </div>
  );
};

export default Search;
