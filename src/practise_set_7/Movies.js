import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function Movies() {
  const [movies, setMovies] = useState();
  const [moviesToShow, setMoviesToShow] = useState();
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fakeFetch('https://example.com/api/movies')
      .then((data) => {
        setMoviesToShow(data.data);
        setMovies(data.data);
        setIsLoading(false);
      })
      .catch((e) => setError(e));
  }, []);
  return (
    <div>
      <h2>Movies</h2>
      {isLoading && <h2>Loading...</h2>}
      <h3>Filter By Year:</h3>
      <select
        value={selectedOption}
        onChange={(e) => {
          setMoviesToShow(
            movies?.filter(
              ({ year }) => year.toString() === e.target.value
            )
          );
          setSelectedOption(e.target.value);
        }}
      >
        {[2005, 2006, 2007, 2008, 2009, 2010].map((i) => (
          <option value={i}>{i}</option>
        ))}
      </select>
      {moviesToShow?.map((movie) => {
        return (
          <li>
            <h3>Title: {movie?.title}</h3>
            <h3>Year: {movie?.year}</h3>
            <h3>Rating: {movie?.rating}</h3>
          </li>
        );
      })}

      {error && <h2>{error.message}</h2>}
    </div>
  );
}
