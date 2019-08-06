import React from 'react';

import Table from './Table';

const SearchResults = ({ searchData }) => {
  return (
    <div>
      {/* <p>
        {searchData.title}
        {searchData.channel_title}
        {searchData.views}
        {searchData.likes}
        {searchData.video_id}
      </p> */}
      <Table videosToShow={searchData} />
    </div>
  );
};

export default SearchResults;
