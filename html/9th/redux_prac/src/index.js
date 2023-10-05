import { createStore } from "redux";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
//상수의 변수
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Date.now() };
      return [newTodo,...state];
    case DELETE_TODO:
      return state.filter((element) => element.id !== action.id);
    default:
      return state;
  }
};
//store
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));
const removeTodo = (event) => {
  event.preventDefault();
  console.log(event.target.parentNode.id)
  store.dispatch({ type: DELETE_TODO , id:Number(event.target.parentNode.id)});
};
store.subscribe(() => {
  const todos = store.getState();
  ul.innerText = "";
  todos.map((value) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "삭제";
    btn.addEventListener("click", removeTodo);
    li.id = value.id;
    li.innerText = value.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  store.dispatch({ type: ADD_TODO, text: input.value });
  input.value = "";
});
