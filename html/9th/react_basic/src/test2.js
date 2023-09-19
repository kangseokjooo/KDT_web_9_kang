import { Component } from "react";
import react from "./logo192.png";

class Test2 extends Component {
  render() {
    const style = {
      color: "orange",
      fontSize: "50px",
      marginTop: "12px",
    };
    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={react} alt="리액트"/>
        </div>
      </>
    );
  }
}

export default Test2;
