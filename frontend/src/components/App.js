import React, {useState, useEffect} from 'react';

import {getTop10} from '../services/videos';

import Table from './Table';

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
      <Table top10Videos={top10Videos}/>
    </div>
  )
};

export default App;
