import { createContext, useEffect, useState } from 'react';
import { fakeFetch } from '../../practise_set_8/fakeFetch';

export const QnAContext = createContext();

export const QnAContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    fakeFetch('https://example.com/api/questions')
      .then((data) => {
        setQuestions(data.data.questions);
        console.log(data.data.questions);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <QnAContext.Provider value={{ questions }}>
      {children}
    </QnAContext.Provider>
  );
};
