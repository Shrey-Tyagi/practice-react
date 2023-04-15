import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ProductList() {
  const [product, setProduct] = useState([]);
  const [productOriginal, setProductOriginal] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fakeFetch('https://example.com/api/products')
      .then((data) => {
        setProduct(data.data?.products);
        setProductOriginal([...data.data?.products]);
        setIsLoading(false);
      })
      .catch((e) => setError(e));
  }, []);
  return (
    <div>
      <h2>Products</h2>
      {isLoading && <h2>Loading...</h2>}
      <button
        onClick={() => {
          setProduct((products) => [
            ...products.sort((a, b) => a.price - b.price),
          ]);
        }}
      >
        Sort by Price Low to High
      </button>
      <button
        onClick={() => {
          setProduct((products) => [
            ...products.sort((a, b) => b.price - a.price),
          ]);
        }}
      >
        Sort by Price High to Low
      </button>
      <button
        onClick={() => {
          setProduct(productOriginal);
        }}
      >
        Reset
      </button>
      {product?.map((prd) => (
        <div>
          <h2>{prd?.name}</h2>
          <h3>{prd?.description}</h3>
          <h3>${prd?.price}</h3>
          <h3>Quantity: {prd?.quantity}</h3>
        </div>
      ))}
      {error && <h2>{error.message}</h2>}
    </div>
  );
}
