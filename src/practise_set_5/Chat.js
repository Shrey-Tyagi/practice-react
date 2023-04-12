import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function Chat() {
  const [chatsData, setChatsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMessage] = useState();
  useEffect(() => {
    fakeFetch('https://example.com/api/userchat')
      .then((data) => {
        setChatsData(data.data);
        setIsLoading(false);
      })
      .catch((e) => setErrorMessage(e.message));
  }, []);
  return (
    <div>
      <h2>User Chats</h2>
      {isLoading && <h2>Loading Chats....</h2>}
      {chatsData?.map((user) => (
        <ul>
          <li>
            <h2>{user.name} Chat</h2>
          </li>
          {user.messages.map(({ from, message }) => (
            <div>
              <h3>
                {from}: {message}
              </h3>
            </div>
          ))}
        </ul>
      ))}
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
