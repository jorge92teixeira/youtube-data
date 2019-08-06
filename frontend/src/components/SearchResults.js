import React from 'react';

import Table from './Table';

const SearchResults = ({ searchData }) => {
  return (
    <div>
      <Table videosToShow={searchData} />
    </div>
  );
};

export default SearchResults;
