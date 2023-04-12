import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fakeFetch('https://example.com/api/products').then((data) =>
      setProducts(data.data.products)
    );
  }, []);
  return (
    <div>
      <h2>Products</h2>
      <button
        onClick={() =>
          setProducts((products) =>
            products.filter(({ quantity }) => quantity > 20)
          )
        }
      >
        Show products with quantity more than 20
      </button>
      {products.map(({ name, price, quantity }) => (
        <li key={name}>
          {name} - Rs.{price} - Quanitity: {quantity}
        </li>
      ))}
      <button
        onClick={() =>
          setProducts((products) =>
            products.filter(({ price }) => price < 100)
          )
        }
      >
        Filter by Price
      </button>
    </div>
  );
}
