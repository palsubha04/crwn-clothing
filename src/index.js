import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './contexts/cart.context';
import { ProductsProvider } from './contexts/products.context';
import { UserProvider } from './contexts/user.context';
import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>       
        </ProductsProvider>
      </UserProvider>    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


