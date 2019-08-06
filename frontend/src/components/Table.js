/* eslint-disable react/prop-types */
import React from 'react';
// import ReactTable from 'react-table';
// import PropTypes from 'prop-types';

import TableEntry from './TableEntry';

const Table = ({ videosToShow }) => {
  if (videosToShow.length === 0) {
    return (<div />);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Channel</th>
          <th>Likes</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        {
          videosToShow.map(video => (
            <TableEntry
              key={video.id}
              likes={video.likes}
              title={video.title}
              channel={video.channel_title}
              views={video.views}
              thumbnailLink={video.thumbnail_link}
            />
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
