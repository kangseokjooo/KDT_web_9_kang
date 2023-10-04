import {createContext,useState} from 'react'


const MyContextPrac1=createContext({
    theme:'',
    setTheme:()=>{},
    language:'',
    setLanguage:()=>{}
})

export function MyContextPrac({children}){
    const [theme,setTheme]=useState('dark');
    const [language,setLanguage]=useState('ko');
    return(
        <MyContextPrac1.Provider value={{theme,setTheme,language,setLanguage}}>{children}</MyContextPrac1.Provider>
    )
}

export default MyContextPrac1;