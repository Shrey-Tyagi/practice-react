import { useState } from 'react';

export function ListItem({ content, isDone }) {
  const [isDoneState, setIsDoneState] = useState(isDone);
  return (
    <li
      style={
        isDoneState
          ? { textDecoration: 'line-through', color: 'red' }
          : {}
      }
    >
      {content}
      <button
        onClick={() => {
          setIsDoneState(!isDoneState);
        }}
      >
        Mark as Done
      </button>
    </li>
  );
}
