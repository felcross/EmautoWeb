import Image from "next/image"
import loading from '../../../public/loading.gif'
import useAuth from "@/data/hook/useAuth"
import  route  from "next/router";

export default function ForcedAuth(props:any) {
   
    const {loading,user} = useAuth()


    function renderContent(){
   return(<>
    {props.children}
    </>) }

function renderLoading(){
    
    return(

        <div className={`
         flex
         justify-center
         items-center
         h-screen
        `}>
         <Image src={loading} alt=''/>

        </div>
    )

}
console.log("erro aqui",`${loading}`,`${user?.email}`,)

if(!loading && user?.email) {
    return renderContent()
} else if(loading) {
    return renderLoading()
} else { 
    route.push('/authentication')
    return null }

}