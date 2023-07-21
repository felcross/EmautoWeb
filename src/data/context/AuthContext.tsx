import Firebase from "@/firebase/config";
import UserFB from "@/model/UserFB";
import Cookies from "js-cookie"
import { createContext, useEffect, useState } from "react";
import  Route  from "next/router";

 

interface AuthContextProps {
    user?: UserFB | null
    loading?: boolean | any
    loginGoogle?: () => Promise<void>    
    logout?: () => Promise<void>
    login?: (email:any, senha:any) => Promise<void> 
    cadastrar?: (email: string , senha:string) => Promise<void>


}

const AuthContext = createContext<AuthContextProps>({})

async function userNormalize(userfirebase: Firebase.User | any): Promise<UserFB>{
  
    const token = await userfirebase.getIdToken()

    return {
        id: userfirebase.uid,
        nome: userfirebase.displayName,
        email: userfirebase.email,
        token,
        provedor: userfirebase.providerData[0]?.providerId,
        imagemUrl: userfirebase.photoURL 
    }

}

function gerenciarCookies(logado: any ) {
 if(logado) {
   Cookies.set('admin-template', logado, {
    expires: 1
   })
 } else {
    Cookies.remove('admin-template')
 }
}

export const AuthProvider = (props:any)=>{
    const [user,setUser] = useState<UserFB | null>()
    const [loading,setLoading] = useState(true)

     async function configSession( userfirebase: any){
         
         if(userfirebase?.email) {
            const usuario = await userNormalize(userfirebase)
            setUser(usuario)
            gerenciarCookies(true)
            setLoading(false)
            return usuario.email
         } else {
            setUser(null)
            gerenciarCookies(false)
            setLoading(false)
            return false 
         }
     }
     async function login(email?:any,senha?:any){

        try{  setLoading(true)  
            const res = await Firebase.auth().signInWithEmailAndPassword(email,senha)
            await configSession(res.user)
             Route.push('/')
       
        } finally{setLoading(false) }
   

       }

       async function cadastrar(email:string,senha:string){

        try{  setLoading(true)  
            const res = await Firebase.auth().createUserWithEmailAndPassword(email,senha)
            await configSession(res.user)
             Route.push('/')
       
        } finally{setLoading(false) }
       }
     async function loginGoogle(){

        try{  setLoading(true)  
            const res = await Firebase.auth().signInWithPopup(
            new Firebase.auth.GoogleAuthProvider()) 
            await  configSession(res.user)
             Route.push('/')
       
        } finally{setLoading(false) }
       
       /* if(res.user?.email) {
             const usuario = await userNormalize(res.user)
        setUser(usuario)
        Route.push('/')
        }*/
        
       }
        async function logout() {

            try{
                setLoading(true) 
            await Firebase.auth().signOut
            await configSession(null)
            Route.push('/Authentic')

            } finally {
                setLoading(false) 
            }}

       useEffect(() =>{
        //persistir logado
        if( Cookies.get('admin-template')) {

             const cancel = Firebase.auth().onIdTokenChanged(configSession)
          return ()=> cancel()
        }  else { setLoading(false) }
      
       },[])
   
    return(
         <AuthContext.Provider value={{
            user ,
            loginGoogle,
            logout,
            loading,
            login,
            cadastrar
         }}>
          {props.children}
         </AuthContext.Provider>
       
    )
   }

   export default AuthContext
   