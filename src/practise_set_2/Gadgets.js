export function Gadgets({ products }) {
  return (
    <ol>
      <h2>Product List</h2>
      {products.map(({ name, description, price, id }) => (
        <li
          key={id}
          style={price > 50000 ? { border: '3px solid' } : {}}
        >
          Name: {name}, Description: {description}, Price: {price}
        </li>
      ))}
    </ol>
  );
}
