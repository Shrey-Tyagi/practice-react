import { useState } from 'react';
import { ShowBooks } from './ShowBooks';

export function ShowAndToggleBooks({ books }) {
  // const buttonsArr = books.reduce(
  //   (btnarr, { genre }) =>
  //     btnarr.includes(genre) ? btnarr : [...btnarr, genre],
  //   []
  // );
  const buttonsArr = [...new Set(books.map(({ genre }) => genre))];

  const [booksToDisplay, setBooksToDisplay] = useState(books);
  const handleClick = (genreToFilter) =>
    setBooksToDisplay(
      books.filter(({ genre }) => genre === genreToFilter)
    );
  return (
    <div>
      <button
        onClick={() => {
          setBooksToDisplay(books);
        }}
      >
        All Genres
      </button>
      {buttonsArr.map((btn) => (
        <button onClick={() => handleClick(btn)}>{btn}</button>
      ))}
      <ShowBooks books={booksToDisplay} />
    </div>
  );
}
