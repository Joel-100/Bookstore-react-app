import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addbook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const addBook = () => {
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addbook(book));
  };

  return (
    <>
      <form className="form">
        <input className="book-title-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
        <input className="book-title-input" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <button type="button" onClick={addBook}>Add Book</button>
      </form>
    </>
  );
};

export default Form;
