import styled from 'styled-components'
import { useState } from 'react'


const _Input=styled.input`
    padding: 10px;
    margin-right:10px ;
`
const _Btn=styled.button`
    padding: 10px 15px;
    background-color: skyblue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        opacity: 0.8;
    }
`
const _Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const _List=styled.ul`
    height: 200px;
    width: 300px;
    overflow-y: scroll;
    padding: 0;
    text-align: center;
`
const _List_list=styled.li`
    border:1px solid gray;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
`
export default function StylePrac4(){
    const [inputValue,setInputValue]=useState();
    const [list,setList]=useState([]);
    const onClick=()=>{
        if(inputValue !== ''){
        setList([...list,inputValue])
        setInputValue('')
        }
    }

    return (
        <_Container>
            <div>
                <_Input value={inputValue} onChange={e=>setInputValue(e.target.value)} placeholder='할일입력'/>
                <_Btn onClick={onClick}>Add</_Btn>
            </div>
            <_List>
                {list.map((value,index)=>{
                    return<_List_list key={index}>{value}</_List_list>
                })}
            </_List>
        </_Container>
    )
}