import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ShowTodoLists() {
  const [toDoList, setToDoLists] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMessage] = useState();

  useEffect(() => {
    fakeFetch('https://example.com/api/todos')
      .then((data) => {
        setToDoLists(data.data.todos);
        setIsLoading(false);
      })
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return (
    <div>
      {isLoading ? <h2>Loading...</h2> : null}
      {toDoList?.map(({ title, desc, todos }) => (
        <div>
          <h2>
            {title}: {desc}
          </h2>
          <ol>
            {todos?.map((todo) => (
              <li>{todo}</li>
            ))}
          </ol>
          <hr />
        </div>
      ))}
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
