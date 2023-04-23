import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fakeFetch } from './fakeFetch';

export function TodoDetail() {
  const [todo, setTodo] = useState();
  const { todoId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fakeFetch('https://example.com/api/todos').then((data) => {
      setTodo(
        data?.data?.todos.find(({ id }) => todoId === id?.toString())
      );
      setIsLoading(false);
    });
  });

  return (
    <div>
      <Link to={'/todo'}>Todo List </Link>||
      <Link to={'/todo/done'}> Done List </Link>||
      <Link to={'/todo/open'}> Pending List </Link>
      <h2>Todo Description</h2>
      {isLoading && <h3>Is Loading...</h3>}
      <h3>{todo?.title}</h3>
      <p>{todo?.description}</p>
      <h4>Status: {todo?.isCompleted.toString()}</h4>
      <hr />
    </div>
  );
}
