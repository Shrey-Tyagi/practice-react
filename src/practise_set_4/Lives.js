import { useState } from 'react';

export function Lives({ lives }) {
  const [livesToDisplay, setLivesToDisplay] = useState(lives);
  return (
    <div>
      <h2>Current Lives: {livesToDisplay}</h2>
      <button onClick={() => setLivesToDisplay(livesToDisplay - 1)}>
        Loss a Life
      </button>
      {livesToDisplay <= 0 ? <h2>Game Over</h2> : null}
    </div>
  );
}
