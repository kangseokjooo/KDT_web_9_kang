import React, { Component } from "react";


//내장함수는 createRef()
class RefSampleClass2 extends Component{
        //createRef를 사용해서 만들떄는 컴포넌트 내부에 React.createRef()를 할당해 주어야함
        myInput=React.createRef();
        handleFocus=()=>{
            this.myInput.current.focus();
        }
    render(){
        return<>
            <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus처리</p>
            <input ref={this.myInput}/>
            <button type="button" onClick={this.handleFocus}>focus</button>
        </>
    }
}

export default RefSampleClass2;