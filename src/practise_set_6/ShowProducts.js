import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ShowProducts() {
  const [products, setProducts] = useState();
  const [btnList, setBtnList] = useState();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMessage] = useState();

  useEffect(() => {
    fakeFetch('https://example.com/api/products')
      .then((data) => {
        setProducts(data.data.products);
        setBtnList([
          ...new Set(data.data?.products?.map(({ name }) => name)),
        ]);
        setProduct(data.data?.products[0]);
        setIsLoading(false);
      })
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return (
    <div>
      {isLoading ? <h2>Loading...</h2> : null}
      {btnList?.map((btnName) => (
        <button
          onClick={() =>
            setProduct(products.find(({ name }) => name === btnName))
          }
        >
          Show {btnName}
        </button>
      ))}
      <br />
      <img src={product?.src} alt={product?.name} />
      <h2>Name: {product?.name}</h2>
      <h2>Price: Rs. {product?.price}</h2>
      <h2>Description: {product?.desc}</h2>
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
