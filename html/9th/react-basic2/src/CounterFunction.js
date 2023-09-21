import { useState } from "react";


function CounterFunction() {
    const [number,setNumber]=useState(0)
    const handleIncrement=()=>{setNumber(number+1)}
    const handleDecrement=()=>{setNumber(number-1)}
  return(
    <>
        <h1>{number}</h1>
        <button onClick={handleIncrement}>증가</button>
        <button onClick={handleDecrement}>감소</button>
    </>
  )
}

export default CounterFunction;
