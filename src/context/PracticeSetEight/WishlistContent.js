import { createContext, useState } from 'react';

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (item) => setWishlist([...wishlist, item]);
  const removeFromWishlist = (item) => {
    setWishlist((wishlist) => {
      const index = wishlist.findIndex(
        (itemwishlist) => itemwishlist.id === item.id
      );
      if (index > -1) {
        const wishlistCopy = [...wishlist];
        wishlistCopy.splice(index, 1);
        return wishlistCopy;
      }
      return wishlist;
    });
  };
  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
