import { fetchBooks, addBook } from '../API';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const initialState = [];

const addbook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const bookFetch = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchAllBooks = () => async (dispatch) => {
  const allBooks = await fetchBooks();
  dispatch(bookFetch(allBooks));
};

export const addABook = (payload) => async (dispatch) => {
  await addBook(payload);
  dispatch(addbook(payload));
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case FETCH_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export default bookReducer;
