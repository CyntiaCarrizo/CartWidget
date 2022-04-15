
import ItemList from "./ItemList"

import { useEffect, useState } from "react"
import { promesa } from "../Productos"
import { useParams } from "react-router-dom";
import {product} from '../Productos'




function ItemListContainer(greeting){
    
    
    
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();
    
    
    useEffect(()=>{
        
        if (idCategory === undefined) {
         async function pedirDatos(){
           let datosLlegando = await promesa();
           setDatos(datosLlegando)
        console.log(idCategory)   
    }
       pedirDatos()
      
        }else{
            async function pedirDatos(){
                let filtrar= product.filter(item => item.categoryId === parseInt(idCategory))
                let datosLlegando = await promesa(filtrar[1]);
                setDatos(datosLlegando)
                 console.log(filtrar, datosLlegando)   
            }
            pedirDatos()
           
        }
      
    },[])
    
console.log(idCategory)


    return(
        <>
        <p>
        {greeting.greeting}
        </p>
        <ItemList product={datos}></ItemList>
       
      
        </>
    )
}

export default ItemListContainer

