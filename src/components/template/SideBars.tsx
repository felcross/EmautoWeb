import useAuth from "@/data/hook/useAuth"
import { IconLaunch, IconReport, IconSystem, IconTable , IconExit} from "../icons"
import { MenuItens } from "./MenuItens"


export const SideBars = () => {

  const {user,logout} = useAuth()


    return(
      <aside className={`
       flex
       flex-col
       dark:bg-gray-800 
       dark:text-gray-100
      `}>
        <div className={`
         bg-gradient-to-r from-yellow-500 via-white to-blue-800
         h-20 w-20
        `}>

        </div>

          <ul className={` flex-grow`}>
            <MenuItens url="/tables"  text="TABELAS"  icon={IconTable}/>
            <MenuItens url="/launch"  text="LANÇAMENTOS"  icon={IconLaunch}/>
            <MenuItens url="/report"  text="RELATORIOS"  icon={IconReport}/>
            <MenuItens url="/system"  text="SISTEMA"  icon={IconSystem}/>
          </ul>

          <ul className={``}>
            <MenuItens className={`text-red-600`} onclick={logout}  text="SAIR"  icon={IconExit}/>
          </ul>
      </aside>
    )
}