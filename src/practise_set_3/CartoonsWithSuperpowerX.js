export function CartoonsWithSuperpowerX({
  cartoons,
  superpowerToCheck,
}) {
  return (
    <div>
      <h2>Cartoon details who's superpower is {superpowerToCheck}</h2>
      {cartoons
        .filter(({ superpower }) => superpowerToCheck === superpower)
        .map(({ name, superpower, magnitude, id }) => (
          <li key={id}>
            Name: {name}, Superpower: {superpower}, Magnitude:
            {magnitude}
          </li>
        ))}
    </div>
  );
}
