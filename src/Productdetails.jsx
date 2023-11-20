import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"


const Productdetails = () => {

    const[ prod,setProd] =useState({})

   const {id} =useParams()
   useEffect(()=>{

    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(result=> setProd(result))
    console.log(prod);

  },[])
  return (
    <div>
        <p>{prod.description}</p>
    <img src={prod.image} alt="" />
    </div>
  )
}

export default Productdetails