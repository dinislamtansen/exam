import { createContext, useState } from "react";




export const DataContext=createContext()

 export const DataProvider=({children})=>{

const [data,setData]=useState("ripon")
const[loginUser,setLoginUser]=useState({})







return(
<DataContext.Provider value={{data,setData,loginUser,setLoginUser}}>
    {children}

</DataContext.Provider>
)


}