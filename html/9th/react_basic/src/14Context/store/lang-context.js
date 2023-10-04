import { createContext, useState } from "react";


//Context성생
//createContext()는 Provider,Consumer 두개의 컴포넌트 반환
const MyContext = createContext({
    language:'',
    setLanguage:()=>{},
});
//provider
export function LanguageProvider({children}){
    const [language,setLanguage]=useState('jp');
    return(
        <MyContext.Provider value={{language,setLanguage}}>
        {children}
        </MyContext.Provider>
    )
}

export default MyContext;
