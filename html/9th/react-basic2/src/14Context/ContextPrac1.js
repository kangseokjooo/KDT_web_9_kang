import { useContext } from "react";
import MyContextPrac1 from "./store/MyContextPrac1";

export default function ContextPrac1() {
  const value = useContext(MyContextPrac1);

  return(
    <div>
      <h2>현재 선택된 언어:{value.language}</h2>
      <h2>현재 선택된 테마:{value.theme}</h2>
      <select
        value={value.language}
        onChange={(e) => value.setLanguage(e.target.value)}
      >
        <option value="ko">한국어</option>
        <option value="en">영어</option>
      </select>
      <select value={value.theme} onChange={(e)=>value.setTheme(e.target.value)}>
        <option value='dark'>다크</option>
        <option value='white'>화이트</option>
      </select>
    </div>
  )
}
