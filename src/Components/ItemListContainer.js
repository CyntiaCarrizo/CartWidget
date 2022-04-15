
import ItemList from "./ItemList"

import { useEffect, useState } from "react"
import { product, promesa } from "../Productos"
import { useParams } from "react-router-dom";





const ItemListContainer=()=>{
    
    
    
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
                
                let datosLlegando = await promesa();
                let filtrar = datosLlegando.filter(item => item.categoryId === parseInt(idCategory))
               
                setDatos(product)
                 console.log(filtrar, datosLlegando, promesa())   
        
          }
             pedirDatos() 
           
        }
      
    },[idCategory])
    
console.log(idCategory)


    return(
        <>
        
        <ItemList product={datos}></ItemList>
       
       
      
        </>
    )
}

export default ItemListContainer

