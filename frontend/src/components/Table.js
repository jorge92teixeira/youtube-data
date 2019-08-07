/* eslint-disable no-underscore-dangle */
import React from 'react';
import propTypes from 'prop-types';

import TableEntry from './TableEntry';

const Table = ({ index, videosToShow, sort }) => {
  if (videosToShow.length === 0) {
    return (<div />);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th onClick={() => sort(index, 'title')}>Title</th>
          <th onClick={() => sort(index, 'channel_title')}>Channel</th>
          <th onClick={() => sort(index, 'views')}>views</th>
          <th onClick={() => sort(index, 'likes')}>likes</th>
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

Table.propTypes = {
  index: propTypes.number,
  sort: propTypes.func,
  videosToShow: propTypes.arrayOf(
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

Table.defaultProps = {
  index: 0,
  sort: () => {},
};

export default Table;
