import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../context/PracticeSetEight/TodoContext';
import { fakeFetch } from './fakeFetch';

export function Todo() {
  const { todoList, markAdDone, setTodoList } =
    useContext(TodoContext);
  const [errorMessage, setError] = useState();
  useEffect(() => {
    if (!todoList) {
      // check if any better way, can we maintain this in TodoCotext ?
      fakeFetch('https://example.com/api/todos')
        .then((data) => {
          setTodoList(data?.data?.todos);
        })
        .catch((e) => setError(e.message));
    }
  });
  return (
    <div>
      <h2>Todos</h2>
      <Link to="/todo/done">Done Todos </Link>||
      <Link to="/todo/open"> Pending Todos</Link>
      {todoList?.map((task) => {
        const { id, title, description, isCompleted } = task;
        return (
          <div
            key={id}
            style={
              isCompleted ? { textDecoration: 'line-through' } : {}
            }
          >
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>Status: {isCompleted.toString()}</h4>
            <Link to={`/todo/${id}`}>View Todo</Link>
            {!isCompleted && (
              <button
                onClick={() => {
                  markAdDone(task);
                }}
              >
                Mark as done
              </button>
            )}
            <hr />
          </div>
        );
      })}
      {errorMessage && <h3>{errorMessage}</h3>}
    </div>
  );
}
