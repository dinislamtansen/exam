import { createContext, useState } from "react";




export const DataContext=createContext()

 export const DataProvider=({children})=>{

const [data,setData]=useState("ripon")

const info={data,setData}
console.log(data)


return(
<DataContext.Provider value={info}>
    {children}

</DataContext.Provider>
)


}