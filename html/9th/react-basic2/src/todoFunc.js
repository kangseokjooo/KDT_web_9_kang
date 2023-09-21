import { useState } from "react";

export default function TodoFunc() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);
  const handleTodo = () => {
      const newtodo = {
          todo: todo,
        };
        setTodolist([...todolist, newtodo]);
        setTodo("");
        if(todolist.length>=9){
        alert('할일이 너무 많습니다.')
    }
  };
  const handleCheckboxChange = (id) => {
    const completetodo = todolist.map((item, index) =>
      index === id ? { ...item, checked: !item.checked } : item
    );
    setTodolist(completetodo);
  };
  const handleDelete=()=>{
    const deltetodo = todolist.filter((item) => !item.checked);
    setTodolist(deltetodo);
  }
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="할일입력"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="button" onClick={handleTodo}>
          추가
        </button>
      </form>
      <ul>
        {todolist.map((value, id) => {
          return (
            <li key={id}>
              <input
                type="checkbox"
                checked={value.checked || ""}
                onChange={() => handleCheckboxChange(id)}
              />
              {value.todo}
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={handleDelete}>완료된 일 삭제</button>
    </>
  );
}
