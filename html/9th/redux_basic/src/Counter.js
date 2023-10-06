import { useSelector, useDispatch } from "react-redux";
import { couterAction } from "./store/counter";

export default function Counter() {
  const counter = useSelector((state) => state.count.counter);
  const dispatch = useDispatch();
  const add = () => {
    dispatch(couterAction.increment());
  };
  const minus = () => {
    dispatch(couterAction.decrement());
  };
  const calc=()=>{
    dispatch(couterAction.calc({plus:5,minus:-3}));
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={add}>ADD</button>
      <button onClick={minus}>MINUS</button>
      <button onClick={calc}>CalC</button>
    </div>
  );
}
