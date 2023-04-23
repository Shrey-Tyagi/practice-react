import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../context/PracticeSetEight/WishlistContent';

export function WishList() {
  const { wishlist, removeFromWishlist } =
    useContext(WishlistContext);

  return (
    <div>
      <h2>Wishlist</h2>
      <Link to="/products">Product List </Link>||
      <Link to="/products/cart"> My Cart</Link>
      <h3>Items: {wishlist?.length}</h3>
      {wishlist?.map((item) => {
        const { id, name, description, price } = item;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>Price: {price}$</h4>
            <button onClick={() => removeFromWishlist(item)}>
              Remove from Wishlist
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
