const initialState = {
  articles: [],
  article: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ARTICLES':
      return {
        ...state,
        articles: action.articles,
      };
    case 'VIEW_ARTICLE':
      return {
        ...state,
        article: action.article,
      };
    case 'CLAP_ARTICLE':
      const article = Object.assign({}, state.article);
      article.claps += 1;
      return {
        ...state,
        article,
      };
    default:
      return state;
  }
};
