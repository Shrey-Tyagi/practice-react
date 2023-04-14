import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ShowVideos() {
  const [Videos, setVideos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMessage] = useState();

  useEffect(() => {
    fakeFetch('https://example.com/api/videos')
      .then((data) => {
        setVideos(data.data.videos);
        setIsLoading(false);
      })
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return (
    <div>
      <h2>Playlist</h2>
      {isLoading ? <h2>Loading...</h2> : null}
      {Videos?.map(({ title, thumbnail, views, likes }) => (
        <div>
          <img src={thumbnail} alt={title} />
          <h3>{title}</h3>
          <h3>Likes: {likes}</h3>
          <h3>Views: {views}</h3>
        </div>
      ))}
      <button
        onClick={() => setVideos((videosOld) => videosOld?.slice(1))}
      >
        Delete Videos
      </button>
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
