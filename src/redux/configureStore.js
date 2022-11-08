import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './categories/categories';
import bookReducer from "./books/books";

const rootReducer = combineReducers({
  Books: bookReducer,
  Categories: categoriesReducer,
});

const store = configureStore(rootReducer);

export default store;