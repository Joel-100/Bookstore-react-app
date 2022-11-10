import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rUiCkB5mKOw8Omqg1nwI/books';

const fetchBooks = async () => {
  const response = await axios.get(URL);
  const books = response.data;
  const booksArray = Object.keys(books).map((key) => ({
    item_id: key,
    title: books[key][0].title,
    author: books[key][0].author,
    category: books[key][0].category,
  }));
  return booksArray;
};

const addBook = async (book) => {
  const response = await axios.post(URL, book);
  return response.data;
};

export { fetchBooks, addBook };
