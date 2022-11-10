import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllBooks } from '../redux/books/books';
import Booklist from './Booklist';
import Form from './Form';

const BookPage = () => {
  const allbooks = useSelector((state) => state.Books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  return (
    <>
      <Booklist books={allbooks} />
      <Form />
    </>
  );
};
export default BookPage;
