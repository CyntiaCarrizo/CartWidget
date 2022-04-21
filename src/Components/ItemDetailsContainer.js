import { useEffect, useState } from "react"
import customFetch from "./customFetch"
import { product } from "../Productos"

import {  useParams } from "react-router-dom"
import ItemDetails from "./ItemDetails"



const ItemDetailsContainer =()=>{

    const[detail, setDetail] = useState([])
    const {idItem} = useParams()


    useEffect(()=>{
        if (idItem === undefined) {
              customFetch(2000, product)
        .then(result =>setDetail(result))

        .catch(err => console.log(err))
        
        }else{
            customFetch(2000, product.filter(item => item.id=== parseInt(idItem)))
          .then(result =>setDetail(result))
            .catch(err => console.log(err))
            console.log("detail", detail)
           
        }
      
    },[idItem])


    return(
      <ItemDetails product={detail}></ItemDetails>
    )
}
export default ItemDetailsContainer