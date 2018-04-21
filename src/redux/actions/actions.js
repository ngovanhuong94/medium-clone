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

export const comment = () => (dispatch) => {};

export const clap = articleId => (dispatch) => {
  axios.post(`${url}article/clap`, { article_id: articleId })
    .then(() => {
      dispatch({ type: 'CLAP_ARTICLE' });
    }).catch(err => console.log(err));
};

export const follow = (id, userId) => (dispatch) => {
  axios.post(`${url}user/follow`, { id, user_id: userId })
    .then(() => {
      dispatch({ type: 'FOLLOW_USER', user_id: userId });
    }).catch(err => console.log(err));
};

export const SignInUser = userData => (dispatch) => {
  axios.post(`${url}user`, { user_data: userData })
    .then((res) => {
      const user = res.data;
      localStorage.setItem('Auth', JSON.stringify(user));
      dispatch({ type: 'SET_USER', user });
    }).catch(err => console.log(err));
};

export const toggleClose = () => (dispatch) => {
  dispatch({ type: 'TOGGLE_MODAL', modalMode: false });
};

export const toggleOpen = () => (dispatch) => {
  dispatch({ type: 'TOGGLE_MODAL', modalMode: true });
};
