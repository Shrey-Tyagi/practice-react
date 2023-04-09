export function ProductListSalesMoreThanQuantity({ products }) {
  return (
    <div>
      <h2>Product List such that Slaes more than Quantity</h2>
      <ul>
        {products.map(({ name, sales, quantity }) =>
          sales > quantity ? (
            <li>
              Name: {name}, Quanity: {quantity}, Sales: {sales}
            </li>
          ) : (
            ''
          )
        )}
      </ul>
    </div>
  );
}
