// import React, { useContext } from 'react';
// import MyContext from './Mycontext';

import { useContext } from "react";
import CartContext from "./store/cart-context";

// const products = [
//   { id: 1, name: '장난감', price: 2000 },
//   { id: 2, name: '시계', price: 3000 },
//   { id: 3, name: '음료수', price: 2500 }
// ];

// const ProductList = () => {
//   const { addToCart } = useContext(MyContext);

//   return (
//     <div>
//       <h2>상품 목록</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             {product.name} :{product.price}원
//             <button onClick={() => addToCart(product)}>추가</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "A상품",
      price: 1000,
    },
    {
      id: 2,
      name: "B상품",
      price: 1500,
    },
    {
      id: 3,
      name: "C상품",
      price: 2000,
    },
  ];
  const {cart,setCart}=useContext(CartContext)
  const addProduct=(value)=>{
      setCart([...cart,value])
  }
  return (
    <div>
      <h2>상품리스트</h2>
      {products.map((value) => {
        return (
          <div key={value.id}>
            <span>
              {value.name}:{value.price}
            </span>
            <button onClick={()=>addProduct(value)}>장바구니에 추가</button>
          </div>
        );
      })}
    </div>
  );
}
