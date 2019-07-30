import axios from 'axios';

const baseUrl = '/api/videos/top10likesgb';

export const getTop10 = () => {
  return axios
          .get(baseUrl)
          .then(res => res.data);
}
