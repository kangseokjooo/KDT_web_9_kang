import React, { useContext } from 'react';
import MyContext from './Mycontext';

const products = [
  { id: 1, name: '장난감', price: 2000 },
  { id: 2, name: '시계', price: 3000 },
  { id: 3, name: '음료수', price: 2500 }
];

const ProductList = () => {
  const { addToCart } = useContext(MyContext);

  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} :{product.price}원
            <button onClick={() => addToCart(product)}>추가</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
