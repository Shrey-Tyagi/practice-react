import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ShowHabits() {
  const [habits, setHabits] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMessage] = useState();

  useEffect(() => {
    fakeFetch('https://example.com/api/habits')
      .then((data) => {
        setHabits(data.data.habits);
        setIsLoading(false);
      })
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return (
    <div>
      <h2>Habit Tracker</h2>
      {isLoading ? <h2>Loading...</h2> : null}
      <ul>
        {habits?.map(({ title, desc, daysFollowed, daysSkipped }) => (
          <li>
            <h3>
              {title}: {desc}
            </h3>
            <p>{desc}</p>
            <h3>Days Followed: {daysFollowed}</h3>
            <h3>Days Skipped: {daysSkipped}</h3>
            <hr />
          </li>
        ))}
      </ul>
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
