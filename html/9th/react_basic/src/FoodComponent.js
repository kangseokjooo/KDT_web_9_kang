import { Component } from "react";

class FoodComponet extends Component{
    
    render(){
        const style={color:'red'}
        return(
            <>
                <div style={{fontSize:'50px'}}>내가 좋아하는 음식은 <span style={style}>{this.props.food}</span></div>
            </>
        )
        
    }
    
}

FoodComponet.defaultProps={
    food:'치킨',
}
export default FoodComponet;