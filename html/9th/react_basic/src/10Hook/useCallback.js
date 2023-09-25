import { useCallback, useState } from "react";

function ChildComponent({ onClick }) {
  console.log("Child Component");
  return (
    <>
      <button onClick={onClick}>Plus</button>
    </>
  );
}

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  //useCallback 미사용
  const plusCount = () => {
    setCount(count + 1);
  };

  //useCallback 사용
  const plusCountCallback = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ChildComponent onClick={plusCountCallback} />
      <p>{count}</p>
    </>
  );
}
