import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fakeFetch } from './fakeFetch';

export function About() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setError] = useState();
  useEffect(() => {
    fakeFetch('https://example.com/api/products')
      .then((data) => {
        setProduct(
          data?.data?.products.find(
            (prd) => prd.id.toString() === productId
          )
        );
        setIsLoading(false);
      })
      .catch((e) => setError(e.message));
  });
  return (
    <div>
      <h2>Product Detail</h2>
      <Link to="/products">Product List </Link>||
      <Link to="/products/wishlist"> Wishlist</Link>
      {isLoading && <h3>Loading...</h3>}
      <h3>{product?.name}</h3>
      <p>{product?.description}</p>
      <h4>Price: {product?.price}$</h4>
      <h4>Categpry: {product?.category}</h4>
      <h4>Brand: {product?.brand}</h4>
      {errorMessage && <h3>{errorMessage}</h3>}
    </div>
  );
}
