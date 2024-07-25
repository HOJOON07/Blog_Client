import axios from 'axios';

export const getArticleCommentsApi = async (articleId: string) => {
  console.log('!!!!!');
  try {
    const { data } = await axios.get(
      `http://localhost:5500/articles/${articleId}/comments`,
    );
    return data;
  } catch (err) {
    throw err;
  }
};