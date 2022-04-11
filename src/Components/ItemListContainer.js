import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

import { useEffect, useState } from "react"
import { promesa } from "../Productos"





function ItemListContainer(greeting){
    
    const onAdd=(cantidad)=>{
        alert(`La cantidad de productos seleccionado es: ${cantidad}`)
    }
    
    const [datos, setDatos] = useState([]);
    
    
    useEffect(()=>{
      async function pedirDatos(){
           let datosLlegando = await promesa();
           setDatos(datosLlegando)
       }
       pedirDatos()
    },[])
    
    console.log (datos, "soy la data")


    return(
        <>
        <p>
        {greeting.greeting}
        </p>
        <ItemList product={datos}></ItemList>
        <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
      
        </>
    )
}

export default ItemListContainer

