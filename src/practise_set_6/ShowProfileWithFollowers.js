import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ShowProfileWithFollowers() {
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMsg, setErrorMessage] = useState();

  useEffect(() => {
    fakeFetch('https://example.com/api/profilewithfollow')
      .then((data) => {
        setProfile(data.data.profile);
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
        <h3>Followers: {profile?.followers}</h3>
        <h3>Followed By: {profile?.followedBy}</h3>
      </div>

      <button
        disabled={isDisabled}
        onClick={() => {
          setProfile((profileOld) => ({
            ...profileOld,
            followers: profileOld.followers + 1,
          }));
          setIsDisabled(true);
        }}
      >
        {`Follow ${profile?.name}`}
      </button>
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
