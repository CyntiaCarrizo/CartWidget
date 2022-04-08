import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import promesa from "./Promise"
import { useEffect, useState } from "react"
const {product} = require ("./ItemList")




function ItemListContainer(greeting){
    
     const[datos, setDatos] = useState([])
    
    
    useEffect(()=>{
        promesa(2000, product)
        .then(datos => setDatos(datos))
        .catch(err => console.log(err))
    },[])
    


    return(
        <>
        <p>
        {greeting.greeting}
        </p>
        <ItemList product={datos}></ItemList>
        <ItemCount stock={5} initial={1}></ItemCount>
      
        </>
    )
}

export default ItemListContainer