import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fakeFetch('https://example.com/api/users/status').then((data) =>
      setUsers(data.data.users)
    );
  }, []);
  return (
    <div>
      <h2>Online Users</h2>
      {users.map(({ name, status }) => (
        <li
          key={name}
          style={
            status === 'Online'
              ? { color: 'green' }
              : { color: 'red' }
          }
        >
          {name}-{status}
        </li>
      ))}
    </div>
  );
}
