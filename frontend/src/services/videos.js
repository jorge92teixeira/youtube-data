/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const baseUrl = '/api/videos/top10likes';

export const getTop10 = cc => axios
  .get(baseUrl + cc)
  .then(res => res.data);
