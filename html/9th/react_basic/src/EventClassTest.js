import { Component } from "react";

class EventClassTest extends Component {
  message = (str) => {
    alert(str);
  };
  render() {
    return (
      <>
        <button onClick={() => this.message(this.props.message)}>
          Show message
        </button>
      </>
    );
  }
}

export default EventClassTest;
