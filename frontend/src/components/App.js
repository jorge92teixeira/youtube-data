import React, {useState, useEffect} from 'react';

import {getTop10} from '../services/videos';

import Table from './Table';

const App = () => {

  const cc = ['gb','us','ca','fr','de']

  useEffect(() => {
    getTop10('gb')
      .then(res => {
        setTop10Videosgb(res);
      })
    getTop10('us')
      .then(res => {
        setTop10Videosus(res);
      })
    getTop10('ca')
      .then(res => {
        setTop10Videosca(res);
      })
    getTop10('fr')
      .then(res => {
        setTop10Videosfr(res);
      })
    getTop10('de')
      .then(res => {
        setTop10Videosde(res);
      })
  }, []);

  const [top10Videosgb, setTop10Videosgb] = useState([]);
  const [top10Videosus, setTop10Videosus] = useState([]);
  const [top10Videosfr, setTop10Videosfr] = useState([]);
  const [top10Videosca, setTop10Videosca] = useState([]);
  const [top10Videosde, setTop10Videosde] = useState([]);

  return (
    <div>
      <h1>Hello Homepage</h1>
      Great Britain
      <Table top10Videos={top10Videosgb}/>
      United States
      <Table top10Videos={top10Videosus}/>
      Canada
      <Table top10Videos={top10Videosca}/>
      France
      <Table top10Videos={top10Videosfr}/>
      Deutchland
      <Table top10Videos={top10Videosde}/>
    </div>
  )
};

export default App;
