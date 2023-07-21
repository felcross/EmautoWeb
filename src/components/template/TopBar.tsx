import { Title } from "./Title"
import ButtonTheme from "./ButtonTheme"
import useAppData from "@/data/hook/useAppData"
import Avatar from "./Avatar"

interface TopBarProps {
    title: string
    subtitle: string

}

export const TopBar = (props: TopBarProps) => {
    
    const {tema,alternarTema} = useAppData()

    return(
     <div className={`
      flex

     `}>
        <Title title={props.title} subtitle={props.subtitle}/>
           <div className={`
             flex 
             flex-grow
             justify-end
            items-center
              `}>
               
              <ButtonTheme tema={tema} alternarTema={alternarTema}/>
              <Avatar className={`ml-3`}/>
            </div>
     </div>
    )
}