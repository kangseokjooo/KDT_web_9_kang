import { createStore } from "redux";

export const ADD_CART='ADD_CART'
export const DELETE_CART='DELETE_CART'
export const products = [
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

const reducer=(state=[],action)=>{
    switch(action.type){
        case ADD_CART:
            const cartitem={name:action.name ,price:action.price,id:action.id}
            return(
                [...state,cartitem]
            )
        case DELETE_CART:
            return (
                state.filter(el=>el.id!==action.id)
            )
        default:
            return state;       
    }

}









const store=createStore(reducer);


export default store