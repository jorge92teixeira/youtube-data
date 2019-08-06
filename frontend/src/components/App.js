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
        console.log(res);
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

  const sort = (cc, by) => {
    console.log('Im going to sort by ', by, cc);

    let aux = [];

    switch (cc) {
      case 'gb':
        aux = [...top10Videosgb];
        if (aux[0][by] < aux[1][by]) {
          aux.sort((a, b) => ((a[by] < b[by]) ? 1 : -1));
        } else {
          aux.sort((a, b) => ((a[by] > b[by]) ? 1 : -1));
        }
        setTop10Videosgb(aux);
        break;
      case 'us':
        aux = [...top10Videosus];
        if (aux[0][by] < aux[1][by]) {
          aux.sort((a, b) => ((a[by] < b[by]) ? 1 : -1));
        } else {
          aux.sort((a, b) => ((a[by] > b[by]) ? 1 : -1));
        }
        setTop10Videosus(aux);
        break;
      case 'ca':
        aux = [...top10Videosca];
        if (aux[0][by] < aux[1][by]) {
          aux.sort((a, b) => ((a[by] < b[by]) ? 1 : -1));
        } else {
          aux.sort((a, b) => ((a[by] > b[by]) ? 1 : -1));
        }
        setTop10Videosca(aux);
        break;
      case 'fr':
        aux = [...top10Videosfr];
        if (aux[0][by] < aux[1][by]) {
          aux.sort((a, b) => ((a[by] < b[by]) ? 1 : -1));
        } else {
          aux.sort((a, b) => ((a[by] > b[by]) ? 1 : -1));
        }
        setTop10Videosfr(aux);
        break;
      case 'de':
        aux = [...top10Videosde];
        if (aux[0][by] < aux[1][by]) {
          aux.sort((a, b) => ((a[by] < b[by]) ? 1 : -1));
        } else {
          aux.sort((a, b) => ((a[by] > b[by]) ? 1 : -1));
        }
        setTop10Videosde(aux);
        break;
      default:
        console.log('default');
    }
  };

  return (
    <div>
      <h1>Hello Homepage</h1>
      <Search />
      <br />
      <h3>Great Britain</h3>
      <Table cc="gb" videosToShow={top10Videosgb} sort={sort} />
      <h3>United States</h3>
      <Table cc="us" videosToShow={top10Videosus} sort={sort} />
      <h3>Canada</h3>
      <Table cc="ca" videosToShow={top10Videosca} sort={sort} />
      <h3>France</h3>
      <Table cc="fr" videosToShow={top10Videosfr} sort={sort} />
      <h3>Deutchland</h3>
      <Table cc="de" videosToShow={top10Videosde} sort={sort} />
    </div>
  );
};

export default App;
