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

  const sort = (cc, by) => {
    console.log('Im going to sort by ', by, cc);

    // let aux = [];

    // switch (cc) {
    //   case 'gb':
    //     aux = [...top10Videosgb];
    //     if (aux[0][by] < aux[1][by]) {
    //       aux.sort((a, b) => ((a[by] < b[by]) ? 1 : -1));
    //     } else {
    //       aux.sort((a, b) => ((a[by] > b[by]) ? 1 : -1));
    //     }
    //     setTop10Videosgb(aux);
    //     break;
    //   case 'us':
    //     aux = [...top10Videosus];
    //     if (aux[0][by] < aux[1][by]) {
    //       aux.sort((a, b) => ((a[by] < b[by]) ? 1 : -1));
    //     } else {
    //       aux.sort((a, b) => ((a[by] > b[by]) ? 1 : -1));
    //     }
    //     setTop10Videosus(aux);
    //     break;
    //   case 'ca':
    //     aux = [...top10Videosca];
    //     if (aux[0][by] < aux[1][by]) {
    //       aux.sort((a, b) => ((a[by] < b[by]) ? 1 : -1));
    //     } else {
    //       aux.sort((a, b) => ((a[by] > b[by]) ? 1 : -1));
    //     }
    //     setTop10Videosca(aux);
    //     break;
    //   case 'fr':
    //     aux = [...top10Videosfr];
    //     if (aux[0][by] < aux[1][by]) {
    //       aux.sort((a, b) => ((a[by] < b[by]) ? 1 : -1));
    //     } else {
    //       aux.sort((a, b) => ((a[by] > b[by]) ? 1 : -1));
    //     }
    //     setTop10Videosfr(aux);
    //     break;
    //   case 'de':
    //     aux = [...top10Videosde];
    //     if (aux[0][by] < aux[1][by]) {
    //       aux.sort((a, b) => ((a[by] < b[by]) ? 1 : -1));
    //     } else {
    //       aux.sort((a, b) => ((a[by] > b[by]) ? 1 : -1));
    //     }
    //     setTop10Videosde(aux);
    //     break;
    //   default:
    //     console.log('default');
    // }
  };

  return (
    <div>
      <h1>Hello Homepage</h1>
      <Search />
      <br />
      <h3>Great Britain</h3>
      <Table cc="gb" videosToShow={top10[0]} sort={sort} />
      <h3>United States</h3>
      <Table cc="us" videosToShow={top10[1]} sort={sort} />
      <h3>Canada</h3>
      <Table cc="ca" videosToShow={top10[3]} sort={sort} />
      <h3>France</h3>
      <Table cc="fr" videosToShow={top10[4]} sort={sort} />
      <h3>Deutchland</h3>
      <Table cc="de" videosToShow={top10[2]} sort={sort} />
    </div>
  );
};

export default App;
