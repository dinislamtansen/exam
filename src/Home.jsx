import {  useEffect } from "react"
import { useState } from "react"
import Card from "./Card"
import SearchBar from "./SearchBar"




function Home(){
  



  const [store, setStore]=useState([])

  


  useEffect(()=>{

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(result=>setStore(result))

  },[])

  


    return(
        <>
        <SearchBar/>
<div className=" flex flex-wrap gap-10 justify-center">
{
    store.map(pd=> <Card key={pd.id} info={pd}/>)
}
    
</div>
        </>
    )
   
}
export default Home



