import React, { useState } from 'react';
import MyContext from './Mycontext';

const MyContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <MyContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
