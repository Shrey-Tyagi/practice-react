import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {
  CartProvider,
  CartContext,
} from './context/PracticeSetEight/CartContext';
import {
  WishlistContext,
  WishlistProvider,
} from './context/PracticeSetEight/WishlistContent';
import {
  TodoContext,
  TodoContextProvider,
} from './context/PracticeSetEight/TodoContext';
import {
  QnAContext,
  QnAContextProvider,
} from './context/PracticeSetEight/QnAContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Practice set 8
export { CartContext };
export { WishlistContext };
export { TodoContext };
export { QnAContext };
// -----

root.render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <TodoContextProvider>
            <QnAContextProvider>
              <App />
            </QnAContextProvider>
          </TodoContextProvider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
