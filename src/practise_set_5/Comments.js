import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function Comments() {
  const [CommentData, setCommentData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMessage] = useState();
  useEffect(() => {
    fakeFetch('https://example.com/api/comments')
      .then((data) => {
        setCommentData(data.data.comments);
        setIsLoading(false);
      })
      .catch((e) => setErrorMessage(e.message));
  }, []);
  return (
    <div>
      <h2>User Comment</h2>
      {isLoading && <h2>Loading Comment....</h2>}
      {CommentData?.map((comment) => (
        <>
          <h2>{comment.name} </h2>
          <h3>{comment.text} </h3>
          <button
            onClick={() => {
              setCommentData((comments) =>
                comments.filter((com) => com.text !== comment.text)
              );
            }}
          >
            Delete
          </button>
        </>
      ))}
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
