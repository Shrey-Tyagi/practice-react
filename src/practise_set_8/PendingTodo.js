import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../context/PracticeSetEight/TodoContext';

export function PendingTodo() {
  const { todoList } = useContext(TodoContext);

  return (
    <div>
      <h2>Pending Todo</h2>
      <Link to={'/todo'}>Todo List </Link>||
      <Link to={'/todo/done'}> Done List </Link>
      <h3>
        Items:
        {todoList?.filter(({ isCompleted }) => !isCompleted).length}
      </h3>
      {todoList
        ?.filter(({ isCompleted }) => !isCompleted)
        .map((item) => {
          const { id, title, description, isCompleted } = item;
          return (
            <div key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <h4>Status: {isCompleted.toString()}</h4>
              <Link to={`/todo/${id}`}>View Todo</Link>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
