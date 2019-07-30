import React from 'react';

const TableEntrie = ({likes, title, channel, views, thumbnail_link}) => {
  return (
    <tr>
      <td><img src={thumbnail_link} alt="thumbnail" ></img></td>
      <td>{title}</td>
      <td>{channel}</td>
      <td>{likes}</td>
      <td>{views}</td>
    </tr>
  );
};

export default TableEntrie;
