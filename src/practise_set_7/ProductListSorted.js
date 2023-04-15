import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ProductListSorted() {
  const [product, setProduct] = useState([]);
  const [productOriginal, setProductOriginal] = useState([]);
  const [searchProduct, setSearchProduct] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const handleInput = (e) => {
    setSearchProduct(e.target.value);
    if (e.target.value)
      setProduct(
        productOriginal.filter(({ name }) =>
          name?.toUpperCase().startsWith(e.target.value.toUpperCase())
        )
      );
    else setProduct(productOriginal);
  };
  useEffect(() => {
    fakeFetch('https://example.com/api/productsList')
      .then((data) => {
        setProductOriginal([...data.data?.products]);
        setProduct(
          [...data.data?.products].sort((a, b) => b.rating - a.rating)
        );
        setIsLoading(false);
      })
      .catch((e) => setError(e));
  }, []);
  return (
    <div>
      <h2>Products sorted with rating</h2>
      {isLoading && <h2>Loading...</h2>}
      Search :{' '}
      <input
        type="text"
        value={searchProduct}
        onChange={handleInput}
      />
      {product?.map((prd) => (
        <div>
          <h2>{prd?.name}</h2>
          <h3>{prd?.rating}</h3>
          <h3>${prd?.price}</h3>
          <h3>Quantity: {prd?.quantity}</h3>
        </div>
      ))}
      {error && <h2>{error.message}</h2>}
    </div>
  );
}
