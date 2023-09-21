import { Component } from "react";

class Board extends Component {
  constructor(props) {
    super(props);
    //초기화
    this.state = {
      inputWriter: "",
      inputTitle: "",
      comments: [],
    };
    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }
  onChange(event) {
    this.setState({ inputWriter: event.target.value });
  }
  addComment() {
    const newComment = {
      writer: this.state.inputWriter,
      title: this.state.inputTitle,
    };
    this.setState(() => ({ comments: [...this.state.comments, newComment],inputTitle:"",inputWriter:"" }));
  }
  render() {
    const {inputTitle,inputWriter,comments}=this.state
    return (
      <>
        <form>
          <label htmlFor="writer">작성자:</label>
          <input
            id="writer"
            type="text"
            value={inputWriter}
            onChange={(e) => this.onChange(e)}
          />
          <label htmlFor="title">제목:</label>
          <input
            id="title"
            type="text"
            value={inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Board;
