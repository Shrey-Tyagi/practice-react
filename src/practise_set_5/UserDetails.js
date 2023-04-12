import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function UserDetails() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    fakeFetch('https://example.com/api/user').then((data) =>
      setUserData(data.data)
    );
  }, []);
  return (
    <div>
      <h2>User Profile</h2>
      <img src={userData?.img} alt="User profile pic" />
      <h3>Name:{userData?.name}</h3>
      <h3>Likes:{userData?.likes}</h3>
      <h3>Comments:{userData?.comments}</h3>
    </div>
  );
}
