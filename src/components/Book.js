import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteABook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteABook(book.item_id));
  };

  return (
    <div className="book-wrapper flex">
      <ul className="list books">
        <li>{book.title}</li>
        <li>Written By</li>
        <li>{book.author}</li>
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
