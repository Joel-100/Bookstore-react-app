import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteABook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteABook(book.item_id));
  };

  return (
    <div className="book-wrapper">
      <div className="book-content">
        <ul className="list books">
          <li className="category">{book.category}</li>
          <li className="title">{book.title}</li>
          <li className="author">{book.author}</li>
        </ul>
        <div className="book-btns">
          <button className="btn" type="button">
            Comment
          </button>
          <button className="btn" type="button" onClick={handleDelete}>
            Remove
          </button>
          <button className="btn" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-wrapper">
        <div className="p-container">
          <div className="progress">
            <CircularProgressbar value={73} />
          </div>
          <div className="p-completed">
            <p className="percent-no">73%</p>
            <span className="completed">completed</span>
          </div>
        </div>

        <div className="chapter-wrapper">
          <p className="Current-Chapter">Current Chapter</p>
          <h3 className="Current-Lesson">Chapter 1: Resilience</h3>
          <button type="button" className="update-progress">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}.isRequired;

export default Book;
