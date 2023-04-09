import { useState } from 'react';

export function MyGadgets({ products }) {
  const [highlightGadget, setHighlightGadge] = useState(false);
  const handleClick = () => setHighlightGadge(!highlightGadget);
  return (
    <div>
      <h2>Product List</h2>
      <ol>
        {products.map(({ name, description, price, id }) => (
          <li
            key={id}
            style={
              price > 50000 && highlightGadget
                ? {
                    backgroundColor: 'lightgreen',
                    border: '3px solid',
                  }
                : {}
            }
          >
            Name: {name}, Description: {description}, Price: {price}
          </li>
        ))}
      </ol>
      <button onClick={handleClick}>
        Highlight Expensive Gadget
      </button>
    </div>
  );
}
