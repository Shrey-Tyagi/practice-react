import { useState } from 'react';

export function ButtonWithHex({ hex, name }) {
  const [showHex, setShowHex] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowHex(!showHex);
        }}
      >
        {name} color
      </button>
      <p>{showHex && hex}</p>
    </div>
  );
}
