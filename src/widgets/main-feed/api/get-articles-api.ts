import axios from 'axios';

export const getArticlesApi = async () => {
  try {
    const response = await axios.get('http://localhost:5500/articles');
    return response.data;
  } catch (err) {
    throw err;
  }
};
