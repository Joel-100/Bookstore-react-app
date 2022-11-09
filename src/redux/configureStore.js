import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const store = configureStore({
  reducer: {
    Books: bookReducer,
    Categories: categoriesReducer,
  },
});

export default store;
