import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import books from './books';
import Book from './Book';

const Booklist = () => {

  return (
  <>
    <h1>Amazon Best-Sellers</h1>
    <section className='bookList'>
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index}/>;
      })}
    </section>
  </>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>
);


