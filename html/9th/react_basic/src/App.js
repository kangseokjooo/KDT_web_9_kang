//  import ClassComponent from "./ClassComponent";
//  import  FunctionComponent  from "./FunctionComponent"; 
import FoodComponet from "./FoodComponent";
import BestsellerComponent from "./BestsellerComponent";
 function App() {
  return (
    <>
      {/* <ClassComponent name={"kang"} age={10}></ClassComponent>
      <ClassComponent/> */}
      {/* <FunctionComponent myClass={'kdt9'}>coding</FunctionComponent>
      <FunctionComponent/> */}
      <FoodComponet food={"피자"}/>
      <FoodComponet/>
      <BestsellerComponent title={"리액트"} author={"asdadas"} price={15000} type={"컴퓨터"}/>
    </>
  )
}

export default App;
