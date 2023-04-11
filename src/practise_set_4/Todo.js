import { useState } from 'react';

export function ToDo({ todoItems }) {
  const [displayItems, setDisplayItem] = useState(todoItems);
  return (
    <div>
      <h2>ToDo list</h2>
      {displayItems.map(({ task, id, isDone }) => (
        <li
          key={id}
          style={isDone ? { textDecoration: 'line-through' } : {}}
        >
          {task}
          <button
            key={id}
            onClick={() => {
              setDisplayItem(
                displayItems.filter((item) => item.id !== id)
              );
            }}
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
}
