import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function Weather() {
  const [weather, setWeather] = useState();
  const [unit, setUnit] = useState('Fahrenheit');
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const convertTemp = (unit, temp) =>
    unit === 'Fahrenheit'
      ? (temp * 9) / 5 + 32
      : ((temp - 32) * 5) / 9;

  useEffect(() => {
    fakeFetch('https://example.com/api/weather')
      .then((data) => {
        setWeather(data.data);
        setIsLoading(false);
      })
      .catch((e) => setError(e));
  }, []);
  return (
    <div>
      <h2>Weather</h2>
      {isLoading && <h2>Loading...</h2>}
      <h3>
        Temperature: {weather?.temperature}°
        {unit === 'Fahrenheit' ? 'C' : 'F'}
      </h3>
      <h3>Humidity: {weather?.humidity}%</h3>
      <h3>Wind Speed: {weather?.windSpeed} km/h</h3>
      <button
        onClick={() => {
          setWeather({
            ...weather,
            temperature: convertTemp(unit, weather?.temperature),
          });
          setUnit(unit === 'Fahrenheit' ? 'Celsius' : 'Fahrenheit');
        }}
      >
        Switch to {unit}
      </button>
      {error && <h2>{error.message}</h2>}
    </div>
  );
}
