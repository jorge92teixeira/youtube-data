import React from 'react';
import propTypes from 'prop-types';

import Table from './Table';

const SearchResults = ({ searchData }) => (
  <div>
    <Table videosToShow={searchData} />
  </div>
);

SearchResults.propTypes = {
  searchData: propTypes.arrayOf(
    propTypes.shape({
      _id: propTypes.string,
      views: propTypes.number,
      title: propTypes.string,
      channel_title: propTypes.string,
      category_id: propTypes.number,
      likes: propTypes.number,
      dislikes: propTypes.number,
      comment_count: propTypes.number,
      thumbnail_link: propTypes.string,
      country_code: propTypes.string,
    }),
  ).isRequired,
};

export default SearchResults;
