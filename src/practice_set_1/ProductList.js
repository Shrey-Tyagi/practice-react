export function ProductList({ products }) {
  return (
    <div>
      <h2>Product Names</h2>
      <ul>
        {products.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
