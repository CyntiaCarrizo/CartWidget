
import Item from "./Item"






function ItemList({product}){
    console.log(product, "soy el item list")
    return(
        <>
        {
            product.length > 0
            ? product.map(item => <Item key={item.id} 
                                        nombre={item.nombre}
                                        price={item.precio}
                                        stock={item.stock}
                                        descripcion={item.descripcion}
                                        image={item.imagen[0]}/> )
            : <p>Cargando</p>

            }
       
            </>
                )
}

export default ItemList

