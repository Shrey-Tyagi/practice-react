export function ItemList({ displayItems }) {
  return (
    <ul>
      {displayItems.map(({ id, name, category }) => (
        <li
          key={id}
          style={
            category === 'Fruit'
              ? { color: 'orange' }
              : { color: 'green' }
          }
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
