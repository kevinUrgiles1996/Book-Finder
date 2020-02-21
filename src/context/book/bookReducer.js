import { SEARCH_BOOKS, GET_BOOK, CLEAR_BOOKS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case GET_BOOK:
      return {
        ...state,
        book: action.payload,
        loading: false
      };
    case CLEAR_BOOKS:
      return {
        ...state,
        books: []
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
