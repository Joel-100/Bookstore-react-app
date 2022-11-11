import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addABook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const addBook = () => {
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Action',
    };
    dispatch(addABook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-header">Add Book</h2>
      <form className="form">
        <input className="book-title-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
        <input className="book-title-input" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <button className="add-btn" type="button" onClick={addBook}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
