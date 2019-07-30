import React from 'react';
import ReactTable from 'react-table';

const Table = ({top10Videos}) => {

  // const thumb = top10Videos.map(video => {
  //   return video.thumbnail_link;
  // }); 

  const columns = [{
    Header: 'Thumbnail',
    acessor: 'thumbnail_link',
    // Cell: (thumb) => {
    //   return <img src={thumb.thumbnail_link}></img>
    // }
  },{
    Header: 'Title',
    accessor: 'title'
  },{
    Header: 'Channel',
    accessor: 'channel_title'
  },{
    Header: 'Views',
    accessor: 'views'
  },{
    Header: 'Likes',
    accessor: 'likes'
  },{
    Header: 'Id',
    accessor: 'video_id'
  },
  ];

  return (
    <div>
      <ReactTable data={top10Videos} columns={columns} />
    </div>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Thumbnail</th>
    //       <th>Title</th>
    //       <th>Channel</th>
    //       <th>Likes</th>
    //       <th>Views</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {top10Videos.map(video =>
    //     < TableEntrie
    //       key={video.id}
    //       likes={video.likes}
    //       title={video.title}
    //       channel={video.channel_title}
    //       views={video.views}
    //       thumbnail_link={video.thumbnail_link}
    //     >
    //     </TableEntrie>)}
    //   </tbody>
    // </table>
  )
};

export default Table;