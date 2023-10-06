import { products } from "./store/cart";
import { ADD_CART,DELETE_CART } from "./store/cart";
import {useSelector,useDispatch} from 'react-redux'

export default function ProductList() {
    const carts=useSelector(state=>state)
    const total=carts.reduce((total,value)=>total+value.price *value.quantity,0)
    const dispatch=useDispatch()
    const onClick=(products)=>{
        dispatch({type:ADD_CART,id:products.id,price:products.price,name:products.name})
    }
    console.log(carts)
    const DELETE=(id)=>{
        dispatch({type:DELETE_CART,id})
    }
  return (
    <div>
      <h1>상품목록</h1>
      <ul>
        {products.map((value) => {
          return (
            <li key={value.id}>
              {value.name}:{value.price}
              <button onClick={()=>onClick(value)}>장바구니</button>
            </li>
          );
        })}
      </ul>
      <h1>장바구니</h1>
      <ul>
        {carts.map((value)=>{
            return (
                <li key={value.id}>
                    {value.name}:{value.price * value.quantity} (수량:{value.quantity})
                    <button onClick={()=>DELETE(value.id)}>X</button>
                </li>
            )
        })}
      </ul>
      총액:{total}
    </div>
  );
}
