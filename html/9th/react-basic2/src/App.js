// import Counter from "./Counter";
// import Text from "./Text";
// import Boards from "./Boards";
// import Board from "./Board";
// import CounterFunction from "./CounterFunction";
// import BoardSearch from "./BoardSearch";
// import ToggleFunc from "./ToggleFunc";
// import TextFunc from "./TextFunc";
// import TodoFunc from "./todoFunc";
// import Practice5 from "./Practice5";
// import LifeCycleClass from "./LifeCycleClass";
// import PostList from "./PostList";
// import UserList from "./UserList";
// import {useState} from 'react'
// import LifePractice2 from "./LifePractice2";
// import BoardRefPractice from "./BoardRefPractice";
// import BoardRefFuncPractice from "./BoardRefFuncPractice";
// import SignupForm from "./ReducerPractice";
// import SassPrac from "./11Style/SassPrac";
// import StyledComponentprac from "./11Style/StyledComponentprac";
// import StylePrac3 from "./11Style/StylePrac3";
// import StylePrac4 from "./11Style/StylePrac4";
// import Router from "./12Router/Router";

import Cart from "./14Context/Cart";
import ProductList from "./14Context/ProductList";
import { CartProvider } from "./14Context/store/cart-context";

// import Cart from "./14Context/Cart";
// import MyContextProvider from "./14Context/MycontextProvider";
// import ProductList from "./14Context/ProductList";
// import ProductList from "./14Context/ProductList";
// import { MyContextCartFunc } from "./14Context/store/MyContextCart";
// import { MyContextPrac } from "./14Context/store/MyContextPrac1";


// import FormPracI from "./13Form/FormPrac";

// import RouterPrac1 from "./12Router/RouterPrac1";

function App() {
  // const [status,setStatus]=useState(true);
  // const removeComponent =()=>{
  //     setStatus(!status)
  // }
  return <>
    {/* <button onClick={removeComponent}>연결해제</button>
    {status && <LifePractice2/>} */}
    {/* <Counter/> */}
    {/* <Text/> */}
    {/* <Board/> */}
    {/* <CounterFunction/> */}
    {/* <BoardSearch/> */}
    {/* <ToggleFunc/> */}
    {/* <TodoFunc/> */}
    {/* <Practice5/> */}
    {/* <BoardRefPractice/> */}
    {/* <BoardRefFuncPractice/>
     */}
     {/* <SassPrac/> */}
     {/* <StylePrac4/>
      */}
      {/* <Router/> */}
      {/* <RouterPrac1/> */}
      {/* <FormPracI/> */}
      {/* <MyContextPrac>
        <ContextPrac1/>
      </MyContextPrac> */}
      {/* <MyContextProvider>
        <ProductList/>
        <Cart/>
      </MyContextProvider> */}
      <CartProvider>
      <ProductList/>
      <Cart/>
      </CartProvider>
  </>;
}

export default App;
