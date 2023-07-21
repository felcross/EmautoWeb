
import { createContext, useState } from "react";

type TEMA = 'dark' | ''

interface AppContextProps {
   tema?:TEMA
   alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export const AppProvider = (props:any)=>{
 const [tema,setTema] = useState<TEMA>('')
    function alternarTema(){
        console.log(setTema(tema === ''?'dark':''))
    }

 return(
      <AppContext.Provider value={{
        tema ,
        alternarTema
      }}>
       {props.children}
      </AppContext.Provider>
    
 )
}


export default AppContext
