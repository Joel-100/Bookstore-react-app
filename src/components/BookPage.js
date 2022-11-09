import React from 'react';
import { useSelector } from 'react-redux';
import Booklist from './Booklist';
import Form from './Form';

const BookPage = () => {
  const allbooks = useSelector((state) => state.Books);

  return (
    <>
      <Booklist books={allbooks} />
      <Form />
    </>
  );
};
export default BookPage;
