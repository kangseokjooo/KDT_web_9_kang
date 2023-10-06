import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*import { createStore } from 'redux';

const input = document.querySelector('#todo');
const add = document.querySelector('#add');
const todolist = document.querySelector('#todolist');

const init = {
  todos: [],
};

const ADD = 'ADD_TODO';
const DELETE = 'DELETE_TODO';

const todoReducer = (state = init, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.data }],
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

const addTodo = (todo) => {
  todoStore.dispatch({ type: ADD, data: todo });
};

const deleteTodo = (id) => {
  todoStore.dispatch({ type: DELETE, id });
};

add.addEventListener('click', () => {
  const todo = input.value;
  if (todo) {
    addTodo(todo);
    input.value = '';
  }
});

const renderTodos = () => {
  const { todos } = todoStore.getState();
  todolist.innerHTML = todos
    .map((todo) => `<li>${todo.text} <button class="delete-btn" data-id="${todo.id}">제거</button></li>`)
    .join('');
};

todolist.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const id = parseInt(event.target.getAttribute('data-id'));
    deleteTodo(id);
  }
});

const todoStore = createStore(todoReducer);

todoStore.subscribe(() => {
  renderTodos();
});





// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

// const ADD = "ADD";
// const MINUS = "MINUS";

// //리듀서
// const countReducer = (state = 0, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case ADD:
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     default:
//       return state;
//   }
// };

// //store:데이터를 넣는 곳
// //createStore에는 reducer함수가 필수
// const countStore = createStore(countReducer);
// console.log(countStore);

// //subscribe()는 데이터와 저장소가 변경될때마다 함수를 실행
// countStore.subscribe(() => {
//   //getState()는 저장소에서 최신상태의 값을 반환할 때 쓰는 메소드
//   num.textContent = countStore.getState();
// });

// add.addEventListener("click", () => {
//   countStore.dispatch({ type: ADD });
// });
// minus.addEventListener("click", () => {
//   countStore.dispatch({ type: MINUS });
// });

// countStore.dispatch({type:'ADD'});
// console.log(countStore.getState())

///자바 스크립트를 이용한 숫자증가 감소 코드
/*
let cnt=0;

add.addEventListener('click',()=>{
    cnt=cnt+1;
    num.textContent=cnt
})

minus.addEventListener('click',()=>{
    cnt=cnt-1;
    num.textContent=cnt
})
*/
