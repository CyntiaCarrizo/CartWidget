import { useEffect, useState } from "react"
import customFetch from "./customFetch"
import { product } from "../Productos"

import {  useParams } from "react-router-dom"
import ItemDetails from "./ItemDetails"



const ItemDetailsContainer =()=>{

    const[detail, setDetail] = useState([])
    const {itemDetails} = useParams()


    useEffect(()=>{
        if (itemDetails === undefined) {
              customFetch(2000, product)
        .then(result =>setDetail(result))
        .catch(err => console.log(err))
        
        }else{
            customFetch(2000, product.filter(item => item.id=== parseInt(itemDetails)))
            .then(result =>setDetail(result[1]))
            .catch(err => console.log(err))
            console.log(customFetch())
            console.log( setDetail())
        }
      
    },[itemDetails])


    return(
      <ItemDetails product={detail}></ItemDetails>
    )
}
export default ItemDetailsContainer