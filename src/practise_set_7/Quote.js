import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function Quote() {
  const [quote, setQuote] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fakeFetch('https://example.com/api/quotes')
      .then((data) => {
        setQuote(data);
        setIsLoading(false);
      })
      .catch((e) => setError(e));
  }, []);
  return (
    <div>
      <h2>Quote</h2>
      {isLoading && <h2>Loading...</h2>}
      <h3>{quote?.content}</h3>
      <h3> - {quote?.author}</h3>
      <button
        onClick={() => {
          setIsLoading(true);
          fakeFetch('https://example.com/api/quotes')
            .then((data) => {
              setQuote(data);
              setIsLoading(false);
            })
            .catch((e) => setError(e));
        }}
      >
        New Quote
      </button>
      {error && <h2>{error.message}</h2>}
    </div>
  );
}
