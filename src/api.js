import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (currentPage, perPage) => {
  const params = new URLSearchParams({
    key: '39229770-f5b3eedca6043c874392c6e75',
    q: 'cat',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: perPage,
  });

  const response = await axios.get(`/?${params}`);
  //console.log(response.data);
  return response.data;
};
