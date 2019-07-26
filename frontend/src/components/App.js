import React, {useState, useEffect} from 'react';

import {getTop10} from '../services/videos';

const App = () => {

  useEffect(() => {
    getTop10()
      .then(res => {
        setTop10Videos(res);
      })
  }, []);

  const [top10Videos, setTop10Videos] = useState([]);

  return (
    <div>
      <h1>Hello Homepage</h1>
      {top10Videos.map(video => <p key={video.id}>{video.likes} - {video.title}</p>)}
    </div>
  )
};

export default App;
