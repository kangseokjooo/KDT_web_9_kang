import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, DELETE_TODO } from "./store/todo";

export default function Main() {
  const [text, setText] = useState("");
  //useSelect:redux store의 state를 조회
  //인자로 콜백함수의 매게 변수로 state를 받을 수 있음.
  //자동으로 subscribe를 하고있기 때문에 데이터가 변형되면 컴포넌트 재실행
  const todos = useSelector((state) => state);
  //dispatch:우리가 호출할 수있는 함수
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, text });
    setText("");
  };
  const onClick=(id)=>{
    dispatch({type:DELETE_TODO,id})
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>To Dos</h1>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">ADD</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} id={todo.id}>
              {todo.text}
              <button onClick={()=>onClick(todo.id)}>DELETE</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
