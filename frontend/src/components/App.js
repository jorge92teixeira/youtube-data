import React, { useState, useEffect } from 'react';

import { getTop10 } from '../services/videos';

import Table from './Table';
import Search from './Search';

const App = () => {
  // const cc = ['gb','us','ca','fr','de'];

  const [top10Videosgb, setTop10Videosgb] = useState([]);
  const [top10Videosus, setTop10Videosus] = useState([]);
  const [top10Videosfr, setTop10Videosfr] = useState([]);
  const [top10Videosca, setTop10Videosca] = useState([]);
  const [top10Videosde, setTop10Videosde] = useState([]);

  useEffect(() => {
    getTop10('gb')
      .then((res) => {
        setTop10Videosgb(res);
      });
    getTop10('us')
      .then((res) => {
        setTop10Videosus(res);
      });
    getTop10('ca')
      .then((res) => {
        setTop10Videosca(res);
      });
    getTop10('fr')
      .then((res) => {
        setTop10Videosfr(res);
      });
    getTop10('de')
      .then((res) => {
        setTop10Videosde(res);
      });
  }, []);

  return (
    <div>
      <h1>Hello Homepage</h1>
      <Search />
      <br />
      <h3>Great Britain</h3>
      <Table videosToShow={top10Videosgb} />
      <h3>United States</h3>
      <Table videosToShow={top10Videosus} />
      <h3>Canada</h3>
      <Table videosToShow={top10Videosca} />
      <h3>France</h3>
      <Table videosToShow={top10Videosfr} />
      <h3>Deutchland</h3>
      <Table videosToShow={top10Videosde} />
    </div>
  );
};

export default App;
