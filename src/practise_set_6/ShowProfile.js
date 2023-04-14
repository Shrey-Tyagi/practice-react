import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ShowProfile() {
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMessage] = useState();

  useEffect(() => {
    fakeFetch('https://example.com/api/profile')
      .then((data) => {
        setProfile(data.data.profiles);
        setIsLoading(false);
      })
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return (
    <div>
      <h2>Profile</h2>
      {isLoading ? <h2>Loading...</h2> : null}
      <div>
        <h3>Name: {profile?.name}</h3>
        <h3>Email: {profile?.email}</h3>
        <h3>Age: {profile?.age}</h3>
        <h3>Gender: {profile?.gender}</h3>
        <h3>Occupation: {profile?.occupation}</h3>
      </div>

      <button
        onClick={() =>
          setProfile((profileOld) => ({
            ...profileOld,
            name: 'Shrey',
          }))
        }
      >
        Update Name
      </button>
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
