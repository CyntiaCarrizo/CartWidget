

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
                                        price={item.precio}
                                        stock={item.stock}
                                        descripcion={item.descripcion}
                                        image={item.imagen}/> 
                                   
                                        )
                                        
            : <p>Cargando</p>
        
      
            }
            {
                <ItemCount initial={1} stock={5} onAdd={onAdd} ></ItemCount>
            }
       
            </>
                )
}

export default ItemDetails




