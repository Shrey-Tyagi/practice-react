import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { QnAContext } from '../context/PracticeSetEight/QnAContext';

export function Answer() {
  const { questionId } = useParams();
  const [ques, setQues] = useState();
  const { questions } = useContext(QnAContext);
  useEffect(
    () =>
      setQues(
        questions?.find(({ id }) => id.toString() === questionId)
      ),
    [questionId, questions]
  );
  return (
    <div>
      <Link to="/qna">Home </Link>||
      <Link to="/qna/questions"> Questions</Link>
      <h2>Answers</h2>
      <h3>Question : {ques?.question}</h3>
      <h3>Answer : {ques?.answer}</h3>
    </div>
  );
}
