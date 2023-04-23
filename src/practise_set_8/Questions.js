import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QnAContext } from '../context/PracticeSetEight/QnAContext';

export function Questions() {
  const { questions } = useContext(QnAContext);
  return (
    <div>
      <h2>Welcome User!</h2>
      <Link to="/qna">Home</Link>
      {questions?.map((que) => {
        let { question, id } = que;
        return (
          <div>
            <h3>{question}</h3>
            <button>Upvote</button>
            <button>Downvote</button>
            <Link to={`/qna/answer/${id}`}>Answer</Link>
          </div>
        );
      })}
    </div>
  );
}
