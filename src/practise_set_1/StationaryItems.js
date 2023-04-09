export function StationaryItems({ items }) {
  return (
    <ol>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  );
}
