import React from 'react';

const TableEntry = ({ thumbnailLink, title, channel, views, likes }) => {
  return (
    <tr>
      <td><img src={thumbnailLink} alt="" /></td>
      <td>{title}</td>
      <td>{channel}</td>
      <td>{views}</td>
      <td>{likes}</td>
    </tr>
  )
};

export default TableEntry;
