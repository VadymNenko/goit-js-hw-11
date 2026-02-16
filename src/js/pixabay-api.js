import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54677312-885a7f8dc2d54d5a2c95924bb';

axios.defaults.baseURL = BASE_URL;

export function getImagesByQuery(query) {
  return axios
    .get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    });
}