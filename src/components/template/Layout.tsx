import useAppData from "@/data/hook/useAppData"
import { Contents } from "./Contents"
import { SideBars } from "./SideBars"
import { TopBar } from "./TopBar"
import ForcedAuth from "../auth/ForcedAuth"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props:LayoutProps) {
  const {tema} = useAppData()
    return(

      <ForcedAuth>
        <div className={
            `${tema}
            flex 
            h-screen 
            w-screen `
        }>   
      <SideBars/>
      <div className={
            `flex 
             flex-col
             w-full
             p-7
             
          bg-gray-100 dark:bg-slate-800
            
        `
        }>
   <TopBar title={props.title} subtitle={props.subtitle} />
      <Contents>
        {props.children}
      </Contents>
    </div>
   
        </div>
      </ForcedAuth>
    )
}