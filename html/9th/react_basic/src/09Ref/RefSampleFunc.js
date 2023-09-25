import {useRef} from 'react';

export default function RefSampleFunc(){
    //1.ref 객체 생성
    const myInput=useRef();
    const handleFocus=()=>{
        //useRef()로만든 객체의 current값에 focus()적용
        myInput.current.focus();
    }
    return <>
        <p>(함수형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>
        {/*2.선택하고 싶은 ref props설정*/}
        <input ref={myInput} />
        <button onClick={handleFocus}>focus</button>
    </>
}