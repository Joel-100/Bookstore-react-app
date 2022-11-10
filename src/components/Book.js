import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-wrapper flex">
      <ul className="list books">
        <li>{title}</li>
        <li>Written By</li>
        <li>{author}</li>
      </ul>
      <button className="remove-button" type="button" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}.isRequired;

export default Book;
