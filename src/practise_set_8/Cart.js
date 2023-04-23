import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/PracticeSetEight/CartContext';

export function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <Link to="/products">Product List </Link>||
      <Link to="/wishlist"> Wishlist</Link>
      <h3>Items: {cart?.length}</h3>
      {cart?.map((item) => {
        const { id, name, description, price } = item;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>Price: {price}$</h4>
            <button onClick={() => removeFromCart(item)}>
              Remove from Cart
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
