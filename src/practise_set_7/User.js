import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function User() {
  const [user, setUser] = useState();
  const [showAddress, setShowAddress] = useState(true);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fakeFetch('https://example.com/api/user')
      .then((data) => {
        setUser(data.data);
        setIsLoading(false);
      })
      .catch((e) => setError(e));
  }, []);
  return (
    <div>
      <h2>User</h2>
      {isLoading && <h2>Loading...</h2>}
      <h3>Name: {user?.name}</h3>
      <h3>Email: {user?.email}</h3>
      <h3>Phone: {user?.phone}</h3>
      {showAddress && (
        <div>
          <h4>{user?.address?.street}</h4>
          <h4>{user?.address?.suite}</h4>
          <h4>{user?.address?.city}</h4>
          <h4>{user?.address?.zipcode}</h4>
        </div>
      )}
      <button
        onClick={() => {
          setShowAddress(!showAddress);
        }}
      >
        {showAddress ? 'Hide Address' : 'Show Address'}
      </button>
      {error && <h2>{error.message}</h2>}
    </div>
  );
}
