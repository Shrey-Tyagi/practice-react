export function CartoonsEvenMagnitude({ cartoons }) {
  return (
    <div>
      <h2>Cartoon Names who's magnitude is even</h2>
      {cartoons
        .filter(({ magnitude }) => magnitude % 2 === 0)
        .map(({ name, id }) => (
          <h1 key={id}>Name: {name}</h1>
        ))}
    </div>
  );
}
