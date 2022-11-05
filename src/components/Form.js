import React from 'react';

const Form = () => (
  <>
    <form className="form">
      <input className="book-title-input" type="text" placeholder="Book title" />
      <input className="book-title-input" type="text" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  </>

);

export default Form;
