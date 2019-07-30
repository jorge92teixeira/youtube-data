import axios from 'axios';

const baseUrl = '/api/videos/top10likes';

export const getTop10 = (cc) => {
  return axios
          .get(baseUrl+cc)
          .then(res => res.data);
}
