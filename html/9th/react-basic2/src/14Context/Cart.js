import React, { useContext } from 'react';
import MyContext from './Mycontext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(MyContext);
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>장바구니</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} :{item.price}원
            <button onClick={() => removeFromCart(item.id)}>제거</button>
          </li>
        ))}
      </ul>
      <div>상품총액{totalAmount}원</div>
    </div>
  );
};

export default Cart;
