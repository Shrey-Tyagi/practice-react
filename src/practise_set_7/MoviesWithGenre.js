import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function MoviesWithGenre() {
  const [movies, setMovies] = useState();
  const [genreList, setGenreList] = useState(['All']);
  const [moviesToShow, setMoviesToShow] = useState();
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fakeFetch('https://example.com/api/movieswithgenre')
      .then((data) => {
        setMoviesToShow(data.data);
        setMovies(data.data);
        setGenreList([
          'All',
          ...new Set(data?.data.map(({ genre }) => genre)),
        ]);
        setIsLoading(false);
      })
      .catch((e) => setError(e));
  }, []);
  return (
    <div>
      <h2>Movies</h2>
      {isLoading && <h2>Loading...</h2>}
      <h3>Filter By Genre:</h3>
      <select
        value={selectedOption}
        onChange={(e) => {
          if (e.target.value === 'All') {
            setMoviesToShow(movies);
          } else {
            setMoviesToShow(
              movies?.filter(({ genre }) => genre === e.target.value)
            );
          }
          setSelectedOption(e.target.value);
        }}
      >
        {genreList.map((i) => (
          <option value={i}>{i}</option>
        ))}
      </select>
      {moviesToShow?.map((movie) => {
        return (
          <li>
            <h3> Title: {movie?.title}</h3>
            <h3> Year: {movie?.year}</h3>
            <h3> Genre: {movie?.genre}</h3>
          </li>
        );
      })}

      {error && <h2>{error.message}</h2>}
    </div>
  );
}
