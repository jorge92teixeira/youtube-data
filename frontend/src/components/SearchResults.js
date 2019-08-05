import React from 'react';

const SearchResults = ({ searchData }) => {
  return (
    <div>
      <p>
        {searchData.title}
        {searchData.channel_title}
        {searchData.views}
        {searchData.likes}
        {searchData.video_id}
      </p>
    </div>
  );
};

export default SearchResults;
