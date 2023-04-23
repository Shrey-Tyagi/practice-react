import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/PracticeSetEight/CartContext';
import { WishlistContext } from '../context/PracticeSetEight/WishlistContent';
import { fakeFetch } from './fakeFetch';

export function ProductList() {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [productList, setProductList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setError] = useState();
  useEffect(() => {
    fakeFetch('https://example.com/api/products')
      .then((data) => {
        setProductList(data?.data?.products);
        setIsLoading(false);
      })
      .catch((e) => setError(e.message));
  }, []);
  return (
    <div>
      <h2>Product Listing Page</h2>
      <Link to="/products/cart">My Cart </Link>||
      <Link to="/products/wishlist"> Wishlist</Link>
      {isLoading && <h3>Loading...</h3>}
      {productList?.map((item) => {
        const { id, name, description, price } = item;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>Price: {price}$</h4>
            <Link to={`/products/about/${id}`}>View Item</Link>
            <button onClick={() => addToCart(item)}>
              Add Item to Cart
            </button>
            <button onClick={() => addToWishlist(item)}>
              Add Item to Wishlist
            </button>
          </div>
        );
      })}
      {errorMessage && <h3>{errorMessage}</h3>}
    </div>
  );
}
