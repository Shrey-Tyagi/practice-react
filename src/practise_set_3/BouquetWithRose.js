export function BouquetWithRose({ bouquet }) {
  const findPrice = () =>
    bouquet.find(({ flowers }) => flowers.includes('rose')).price;
  return (
    <div>
      <h2>Price of bouquet with roses : {findPrice()}</h2>
    </div>
  );
}
