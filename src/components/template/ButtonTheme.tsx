import { IconMoon, IconSun } from "../icons"

interface ButtonThemeProps {
    tema?:string
    alternarTema?: () => void
}


export default function ButtonTheme(props:ButtonThemeProps){

    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={`
        hiddem sm:flex items-center cursor-pointer
        bg-gradient-to r from-yellow-300 to bg-yellow-600
        w-14 lg:w-24 h-8 p1 rounded-full
        `}>
             <div className={`
             flex items-center justify-center
             bg-white text-yellow-300
             w-6 h-6 rounded-full`}>
             {IconSun(4)}
            </div>

            <div className={`
            hidden lg:flex items-center ml-4 text-white`}>
            <span>Dia</span>
            </div>  
        </div>

    ) : (

        <div onClick={props.alternarTema} className={`
        hiddem sm:flex items-center cursor-pointer
        bg-gradient-to r from-gray-300 to bg-gray-600
        w-14 lg:w-24 h-8 p1 rounded-full
        `}>
            
            <div className={`
            hidden lg:flex items-center mr-5 text-white`}>
            <span>Noite</span>
            </div>  
            
             <div className={`
             flex items-center justify-center
             bg-black text-yellow-300
             w-6 h-6 rounded-full`}>
             {IconMoon(4)}
            </div>
        </div>

    )
}