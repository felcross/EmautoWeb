import Link from "next/link"

interface MenuItemprops {
    url?: string
    text: string
    className?: string
    icon: any
    onclick?: (event:any) => void
}

export const MenuItens = (props: MenuItemprops) => {

     function renderLink(){
        return(    <div className={`
                 flex
                 flex-col
                 justify-center
                 items-center
                 h-20 
                 w-30
                 dark:text-gray-300
                 ${props.className}
                `}>
                 {props.icon}
                 <span className={`
                  text-xs
                  font-light text-gray-700
                  dark:text-gray-300
                  `}>
                 {props.text}
                 </span>
                </div> 


        )

     }

    return(
        <li onClick={props.onclick} className={`hover:bg-red-400
        cursor-pointer 
        `}>
            {props.url ? (
                <Link href={props.url}>
             {renderLink()}
            </Link> 
            ) :(
                renderLink()

            )}
           
        
        </li>
    )
}