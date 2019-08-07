import React, { useState, useEffect } from 'react';

import { getTop10 } from '../services/videos';

import Table from './Table';
import Search from './Search';

const App = () => {
  const [top10, setTop10] = useState([[], [], [], [], []]);

  useEffect(() => {
    getTop10()
      .then((res) => {
        setTop10(res);
      });
  }, []);

  const sort = (index, by) => {
    const videos = [...top10];
    const videosToSort = videos[index];

    if (videosToSort[0][by] < videosToSort[1][by]) {
      videosToSort.sort((a, b) => ((a[by] < b[by]) ? 1 : -1));
    } else {
      videosToSort.sort((a, b) => ((a[by] > b[by]) ? 1 : -1));
    }
    setTop10(videos);
  };

  return (
    <div>
      <h1>Hello Homepage</h1>
      <Search />
      <br />
      <h3>Great Britain</h3>
      <Table index={0} videosToShow={top10[0]} sort={sort} />
      <h3>United States</h3>
      <Table index={1} videosToShow={top10[1]} sort={sort} />
      <h3>Canada</h3>
      <Table index={3} videosToShow={top10[3]} sort={sort} />
      <h3>France</h3>
      <Table index={4} videosToShow={top10[4]} sort={sort} />
      <h3>Deutchland</h3>
      <Table index={2} videosToShow={top10[2]} sort={sort} />
    </div>
  );
};

export default App;
