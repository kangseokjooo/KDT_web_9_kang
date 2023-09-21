import { Component } from "react";

class Text extends Component{
    state={
        text:'사라져라',
        display:{display:'flex'}
    }
    Disa=()=>{
        this.setState((preState)=>({
            text : preState.display.display === "flex" ? "보여라" : "사라져라",
            display: {display : preState.display.display==="flex"? "none": "flex"}
        }
        ))
    }
    render(){
        
        return(
            <>
                <h1 style={this.state.display}>안녕</h1>
                <button onClick={this.Disa}>{this.state.text}</button>
            </>
        )
    }
}

export default Text;