import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:5000/api/';

export const loadArticles = () => (dispatch) => {
  axios.get(`${url}articles`)
    .then((res) => {
      const articles = res.data;
      dispatch({ type: 'LOAD_ARTICLES', articles });
    }).catch(err => console.log(err));
};

export const getUser = _id => axios.get(`${url}user/${_id}`).then(res => res.data).catch(err => console.log(err));

export const getUserProfile = _id => (dispatch) => {
  axios.get(`${url}user/profile/${_id}`)
    .then((res) => {
      const profile = res.data;
      dispatch({ type: 'SET_PROFILE', profile });
    }).catch(err => console.log(err));
};

export const getArticle = articleId => (dispatch) => {
  axios.get(`${url}articles/${articleId}`)
    .then((res) => {
      const article = res.data;
      dispatch({ type: 'VIEW_ARTICLE', article });
    }).catch(err => console.log(err));
};
