
import Item from "./Item"
import {product} from '../Productos'





function ItemList({product}){
    
    return(
        <>
        {
            product.length > 0
            ? product.map(item => <Item key={item.id} 
                                        id={item.id}
                                        nombre={item.nombre}
                                        precio={item.precio}
                                        stock={item.stock}
                                        descripcion={item.descripcion}
                                        imagen={item.imagen}></Item> )
            : <p>Cargando</p>

            }
       
            </>
                )
}

export default ItemList

