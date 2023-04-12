import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function MultiUserDetails() {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMessage] = useState();
  useEffect(() => {
    fakeFetch('https://example.com/api/users')
      .then((data) => {
        setUserData(data.data);
        setIsLoading(false);
      })
      .catch((e) => setErrorMessage(e.message));
  }, []);
  return (
    <div>
      <h2>User Profile</h2>
      {isLoading && <h2>Loading....</h2>}
      {userData?.map((user) => (
        <>
          <img src={user.img} alt="User profile pic" />
          <h3>Name:{user.name}</h3>
          <h3>Likes:{user.likes}</h3>
          <h3>Comments:{user.comments}</h3>
        </>
      ))}
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
