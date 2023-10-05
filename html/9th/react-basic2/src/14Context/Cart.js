// import React, { useContext } from 'react';
// import MyContext from './Mycontext';

import { useContext } from "react"
import CartContext from "./store/cart-context"
import CartItem from "./CartItem"

// const Cart = () => {
//   const { cartItems, removeFromCart } = useContext(MyContext);
//   const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <div>
//       <h2>장바구니</h2>
//       <ul>
//         {cartItems.map(item => (
//           <li key={item.id}>
//             {item.name} :{item.price}원
//             <button onClick={() => removeFromCart(item.id)}>제거</button>
//           </li>
//         ))}
//       </ul>
//       <div>상품총액{totalAmount}원</div>
//     </div>
//   );
// };

export default function Cart(){
  const {cart}=useContext(CartContext)
  const totalPrice=cart.reduce((acc,curr)=>acc+curr.price,0);
  return <div>
      <h2>장바구니</h2>
      {cart.map(value=>(
        <CartItem key={value.id} value={value}/>
      ) 
          
      )}
     총액:{totalPrice}원
  </div>
}
