import { useEffect, useState } from "react"
import ItemDetails from "./ItemsDetails"
import { customFetch } from "../Productos.js"

const { product}= require ('../Productos.js')






function ItemDetailContainer(){
    
  
    
    const [datos, setDatos] = useState([]);
    
    
    useEffect(()=>{
      customFetch()
      .then(results=> setDatos (results[4]))
      .catch(err=> console.log (err))
    },[]);
    
    console.log (datos, "soy la data")
    

    return(
        <>
      
      
        <ItemDetails product={datos}></ItemDetails>
       
       
      
        </>
    )
    
}

export default ItemDetailContainer

