const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: '1',
    title: 'My journey as a developer',
    author: 'Joe',
  },
  {
    id: '2',
    title: 'My best coding days',
    author: 'Kay',
  },
];

export const addbook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter[(book) => book.id !== action.payload];
    default:
      return state;
  }
};

export default bookReducer;
