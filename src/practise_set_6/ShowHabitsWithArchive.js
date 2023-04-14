import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ShowHabitsWithArchive() {
  const [habits, setHabits] = useState();
  const [displayHabits, setDisplayHabits] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isArchieved, setIsArchieved] = useState(false);
  const [errorMsg, setErrorMessage] = useState();

  useEffect(() => {
    fakeFetch('https://example.com/api/habitswitharchieve')
      .then((data) => {
        setHabits(data.data?.habits);
        setDisplayHabits(
          data.data?.habits?.filter(({ archived }) => !archived)
        );
        setIsLoading(false);
      })
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return (
    <div>
      {isArchieved ? <h2>Archived</h2> : <h2>Unarchived</h2>}

      {isLoading ? <h2>Loading...</h2> : null}
      <ul>
        {displayHabits?.map(
          ({ title, desc, daysFollowed, daysSkipped }) => (
            <li>
              <h3>
                {title}: {desc}
              </h3>
              <p>{desc}</p>
              <h3>Days Followed: {daysFollowed}</h3>
              <h3>Days Skipped: {daysSkipped}</h3>
              <hr />
            </li>
          )
        )}
      </ul>
      <button
        onClick={() => {
          setDisplayHabits(habits.filter(({ archived }) => archived));
          setIsArchieved(true);
        }}
      >
        Show Archives
      </button>
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
