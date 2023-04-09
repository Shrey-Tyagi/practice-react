export function FlowersOfBouquetPriceAbove2000({ bouquet }) {
  return (
    <div>
      {bouquet
        .filter(({ price }) => price > 2000)
        .map(({ flowers }) =>
          flowers.map((flower) => <li>{flower}</li>)
        )}
    </div>
  );
}
