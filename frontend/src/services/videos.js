import axios from 'axios';

const baseUrl = '/api/videos/top10likes';

export const getTop10 = () => {
  return axios
          .get(baseUrl)
          .then(res => res.data);
}
