import { Link } from 'react-router-dom';

export function QuestionAnswer() {
  return (
    <div>
      <h2>Welcome User!</h2>
      <Link to="/qna/questions"> Questions</Link>
    </div>
  );
}
