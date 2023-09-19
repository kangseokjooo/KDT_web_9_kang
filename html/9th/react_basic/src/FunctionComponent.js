//함수형 컴포넌트
//function 컴포넌트명(){},const 컴포넌트 명=()=>{}
import PropTypes from "prop-types"

function FunctionComponent(props){
    const myClass='kdt9'
    return(<>
        <h1>반갑습니다. {myClass}.에 오신 것을 환영합니다</h1>
        <p>여기는 함수형 컴포넌트 입니다</p>
        <h1>props {props.myClass}</h1>
        <h2>{props.children}</h2>
    </>
    )
}

FunctionComponent.defaultProps={
    myClass:"kdt"
}

FunctionComponent.propTypes={
    myClass:PropTypes.string,
}

export default FunctionComponent;