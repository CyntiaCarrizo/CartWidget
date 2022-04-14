

import Item6 from "./Item6"
import ItemCount from "./ItemCount"


function ItemDetails({product}){
    
    const onAdd=(cantidad)=>{
        alert(`La cantidad de productos seleccionado es: ${cantidad}`)
    }
    

    console.log(product, "soy el item list")
    return(
        <>
        {
            product.length >0
            ? product.map(item => <Item6 key={item.id} 
                                        nombre={item.nombre}
                                        precio={item.precio}
                                        stock={item.stock}
                                        descripcion={item.descripcion}
                                        imagen={item.imagen}></Item6> 
                                       
                                       
                              
                                   
                                        )
                                        
            : <p>Cargando</p>
        
      
            }
         
       
            </>
                )
}

export default ItemDetails




