import { useDebugValue, useEffect, useState } from "react"
const {product} = require ("../Productos")

const item=()=>{
    const[datos, setDatos] = useState([])
}


useEffect(()=>{
    promesa(2000, product)
    .then(datos => console.log(datos))
    .catch(err => console.log(err))
},[])


const ItemList = (product)=>{
    return(
        <>
        {product.length>0
            ?product.map(product => key={product.id} descripcion={product.descripcion} precio={product.precio} url={product.imagen})
            :<p>Cargando</p>

            }
       
            </>
                )
}

export default ItemList

