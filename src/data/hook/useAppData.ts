import { useContext } from "react";
import AppContext from "../context/AppContex";
 

   const useAppData = () => useContext(AppContext)

   export default useAppData