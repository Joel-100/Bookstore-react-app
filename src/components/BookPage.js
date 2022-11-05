import React from 'react';
import Booklist from './Booklist';
import Form from './Form';

const BookPage = () => {
  const allbooks = [
    {
      id: 1,
      title: 'A Tale of two Cities',
      author: 'Charles Dickens',
    },
    {
      id: 2,
      title: 'In the name of the Wind',
      author: 'Patrick Rothfuss',
    },
    {
      id: 3,
      title: 'A Song of Ice and Fire',
      author: 'George R. R. Martin',
    },
  ];

  return (
    <>
      <Booklist books={allbooks} />
      <Form />
    </>
  );
};
export default BookPage;
