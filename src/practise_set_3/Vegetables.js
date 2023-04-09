import { useState } from 'react';

export function Vegetables({ vegetables }) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div>
      {vegetables.map(({ name, id, pickDate }) => (
        <p
          key={id}
          style={
            isHighlighted && pickDate === '2023-03-30'
              ? { color: 'green' }
              : {}
          }
        >
          Name : {name}, Pick date : {pickDate}
        </p>
      ))}
      <button
        onClick={() => {
          setIsHighlighted(!isHighlighted);
        }}
      >
        Highlight Fresh Vegetables
      </button>
    </div>
  );
}
