export function Phones({ products }) {
  return (
    <div>
      <h2>Phones List</h2>
      <ul>
        {products
          .filter(({ name }) => name === 'mobile')
          .map(({ description, price, name, id }) => (
            <li key={id}>
              Name: {name}, Description: {description}, Price: {price}
            </li>
          ))}
      </ul>
    </div>
  );
}
