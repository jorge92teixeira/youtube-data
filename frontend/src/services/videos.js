import axios from 'axios';

const baseUrl = '/api/videos/';

export const getTop10 = () => axios
  .get(`${baseUrl}top10views/`)
  .then(res => res.data);

export const searchVideoById = videoId => axios
  .get(`${baseUrl}search/${videoId}`)
  .then(res => res.data);
