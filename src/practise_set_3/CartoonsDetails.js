export function CartoonsDetails({ cartoons }) {
  return (
    <div>
      <h2>Cartoon details</h2>
      {cartoons
        .filter(({ magnitude }) => magnitude > 5)
        .map(({ name, superpower, magnitude, id }) => (
          <li key={id}>
            Name: {name}, Superpower: {superpower}, Magnitude:
            {magnitude}
          </li>
        ))}
    </div>
  );
}
