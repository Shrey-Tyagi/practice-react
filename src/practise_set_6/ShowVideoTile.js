import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ShowVideoTile() {
  const [video, setVideo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [displayLable, setDisplayLable] = useState(false);
  const [errorMsg, setErrorMessage] = useState();

  useEffect(() => {
    fakeFetch('https://example.com/api/getvideo')
      .then((data) => {
        setVideo(data.data.videos);
        setIsLoading(false);
      })
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return (
    <div>
      <h2>Video Tile</h2>
      {isLoading ? <h2>Loading...</h2> : null}
      <div>
        <h3> {video?.title}</h3>
        <img src={video?.thumbnail} alt={video?.title} />
        <h3>Views: {video?.views}</h3>
        <h3>Likes: {video?.likes}</h3>
        {displayLable && <h3>Lable: Self Motivation</h3>}
      </div>
      <button onClick={() => setDisplayLable(true)}>Add Label</button>
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
