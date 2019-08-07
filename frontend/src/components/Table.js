/* eslint-disable react/prop-types */
import React from 'react';
// import ReactTable from 'react-table';
// import PropTypes from 'prop-types';

import TableEntry from './TableEntry';

const Table = ({ cc, videosToShow, sort }) => {
  if (videosToShow.length === 0) {
    return (<div />);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th onClick={() => sort(cc, 'title')}>Title</th>
          <th onClick={() => sort(cc, 'channel_title')}>Channel</th>
          <th onClick={() => sort(cc, 'views')}>views</th>
          <th onClick={() => sort(cc, 'likes')}>likes</th>
        </tr>
      </thead>
      <tbody>
        {
          videosToShow.map(video => (
            <TableEntry
              key={video._id}
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
