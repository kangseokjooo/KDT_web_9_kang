import { useState } from 'react'
import styled from 'styled-components'

const _StyleButton=styled.button`
    background-color: ${props=>props.isClicked ? 'red':'blue'};
    color: ${props=>props.isClicked ? 'black':'white'};
    padding: 10px;
    cursor: pointer;
`

export default function StylePrac3(){
    const [isClicked,setIsClicked]=useState(false)
    const onClick=()=>{
        setIsClicked(!isClicked)
    }

    return(
        <>
            <_StyleButton onClick={onClick} isClicked={isClicked}>색상변경!</_StyleButton>
        </>
    )
}