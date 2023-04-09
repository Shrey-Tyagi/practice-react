export function Product({ name, price }) {
  return (
    <div>
      <p style={{ color: 'blue', fontWeight: 'bold' }}>
        Name : {name}
      </p>
      <br />
      <p style={{ fontStyle: 'italic', color: 'green' }}>
        Price : {price}
      </p>
    </div>
  );
}
