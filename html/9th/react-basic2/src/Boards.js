import { Component } from "react";

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      writer: "",
      title: "",
      boardlist:[],
    };
    this.handleBoardSubmit = this.handleBoardSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleBoardSubmit(event) {
    event.preventDefault();
    const { writer, title } = this.state;
    this.setState((prevState) => ({
      boardlist: [
        ...prevState.boardlist,
        { title: title, writer: writer },
      ],
      writer:"",
      title:""
    }));
  }
  handleSearch1(e){
    if(e.target.value==='작성자'){
        
    }
  }
  handleSearch(){
    
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleBoardSubmit}>
          작성자 :{" "}
          <input
            type="text"
            name="writer"
            value={this.state.writer}
            onChange={this.handleInputChange}
          />
          제목 :{" "}
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <button type="submit">작성</button>
        </form>
        <select onChange={this.handleSearch1} value={this.seleted}>
          <option>제목</option>
          <option>작성자</option>
        </select>
        <input type="text" />
        <button onClick={this.handleSearch}>검색</button>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
                        {this.state.boardlist.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{value.title}</td>
                                    <td>{value.writer}</td>
                                </tr>
                            )
                        })}
                    </tbody>
        </table>
      </>
    );
  }
}

export default Boards;
