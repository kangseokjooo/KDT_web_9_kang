import { Component } from "react";

class RefSampleClass1 extends Component {
    handleFocus=()=>{
        this.myInput.focus();
    }
    render() {

    return(
        <>
            <p>(Class형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
            <input ref={(ref)=>{this.myInput=ref}}/>
            <button type="button" onClick={this.handleFocus}>focus</button>
        </>
    )
  }
}

export default RefSampleClass1;
