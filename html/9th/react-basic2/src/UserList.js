import {useEffect,useState} from 'react'
import axios from 'axios'

export default function UserList(){
    const [user,setUser]=useState([])
    useEffect(()=>{
        async function getUser(){
            const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            setUser(res.data)
        }
        
        getUser();
        console.log(`유저정보업데이트 ${user.length}`)
        return console.log('연결종료')
    },[])


    return<>
        {user.map(value=>{
            return(
                <ul key={value.id}>
                    <li>{value.name}-{value.email}</li>
                </ul>
            )
        })}
    </>
}