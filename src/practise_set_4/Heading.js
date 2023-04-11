import { useState } from 'react';

export function Heading() {
  const [size, setSize] = useState(18);
  return (
    <div>
      <p style={{ fontSize: `${size}px` }}>Welcome</p>

      <button
        onClick={() => {
          setSize(size + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setSize(size - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
