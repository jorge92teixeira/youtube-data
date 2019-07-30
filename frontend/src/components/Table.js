import React from 'react';

import TableEntrie from './TableEntrie';

const Table = ({top10Videos}) => {
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
        {top10Videos.map(video =>
        < TableEntrie
          key={video.id}
          likes={video.likes}
          title={video.title}
          channel={video.channel_title}
          views={video.views}
          thumbnail_link={video.thumbnail_link}
        >
        </TableEntrie>)}
      </tbody>
    </table>
  )
};

export default Table;