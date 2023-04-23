import { Link } from 'react-router-dom';

export function PracticeSetEight() {
  return (
    <div>
      <Link to="/products">Product List </Link>||
      <Link to="/todo"> To do List </Link>||
      <Link to="/qna"> Question and Answers</Link>
    </div>
  );
}
