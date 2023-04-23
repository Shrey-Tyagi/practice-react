import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((cart) => [...cart, item]);
  }
  function removeFromCart(item) {
    setCart((cart) => {
      const index = cart.findIndex(
        (itemCart) => itemCart.id === item.id
      );
      if (index > -1) {
        const cartCopy = [...cart];
        cartCopy.splice(index, 1);
        return cartCopy;
      }
      return cart;
    });
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
