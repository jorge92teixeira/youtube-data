/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const baseUrl = '/api/videos/';

export const getTop10 = cc => axios
  .get(`${baseUrl}top10views/${cc}`)
  .then(res => res.data);

export const searchVideoById = videoId => axios
  .get(`${baseUrl}search/${videoId}`)
  .then(res => res.data);
