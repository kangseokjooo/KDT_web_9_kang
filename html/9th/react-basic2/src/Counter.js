import { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       number: 0,
  //     };

  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement() {
  //     this.setState({ number: this.state.number + 1 });
  //     console.log(this);
  //   }
  state = {
    number:0,
  };
  handleIncrement = () => {
    this.setState({ number: this.state.number + 1 });
  };
  handleDecrement = () => {
    //setState:호출 직후에 상태가 바로 업데이트되지않는다
    //react는 setState를 일괄 처리한다
    //2번의 setState가 1번의 setState의 결과를 기반으로 동작하지 않는다.
    // this.setState({ number: this.state.number - 1 }); //-->1번
    // this.setState({ number: this.state.number - 1 });//-->2번
    this.setState((preState)=>{
        return {number:preState.number -1}
    })
    this.setState((preState)=>{
        return {number:preState.number -1}
    })
    this.setState((preState)=>({number:preState.number-1}))
    console.log(this);
  };
  render() {
    const {number}=this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={this.handleIncrement}>증가</button>
        <button onClick={this.handleDecrement}>감소</button>
      </div>
    );
  }
}

export default Counter;
