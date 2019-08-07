import React from 'react';
import propTypes from 'prop-types';


const TableEntry = ({
  thumbnailLink,
  title,
  channel,
  views,
  likes,
}) => (
  <tr>
    <td><img src={thumbnailLink} alt="" /></td>
    <td>{title}</td>
    <td>{channel}</td>
    <td>{views}</td>
    <td>{likes}</td>
  </tr>
);

TableEntry.propTypes = {
  thumbnailLink: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  channel: propTypes.string.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
};

export default TableEntry;
