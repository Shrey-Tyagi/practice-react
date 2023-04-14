import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ShowPosts() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMessage] = useState();

  useEffect(() => {
    fakeFetch('https://example.com/api/posts')
      .then((data) => {
        setPosts(data.data.posts);
        setIsLoading(false);
      })
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return (
    <div>
      <h2>Posts</h2>
      {isLoading ? <h2>Loading...</h2> : null}
      {posts?.map(({ caption, src, views, likes }) => (
        <div>
          <img src={src} alt={caption} />
          <h3>{caption}</h3>
          <h3>Likes: {likes}</h3>
          <h3>Views: {views}</h3>
        </div>
      ))}
      <button
        onClick={() =>
          setPosts((postsOld) =>
            postsOld.filter(({ category }) => category === 'Bakery')
          )
        }
      >
        Show bakery
      </button>
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
