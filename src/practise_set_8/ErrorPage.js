import { Link } from 'react-router-dom';

export function ErrorPage() {
  return (
    <div>
      <h2>Error Page</h2>
      <Link to="/products">Product List </Link>||
      <Link to="/todo"> To do List </Link>||
      <Link to="/qna"> Question and Answers</Link>
      <h3>404! Page not found</h3>
    </div>
  );
}
