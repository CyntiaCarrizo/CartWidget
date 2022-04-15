
import { product } from "../Productos"

const ItemDetails =()=>{

    if(product.length > 0){
        product.map(item=> <ItemDetails key={item.id}
                                                nombre={item.nombre}
                                                precio={item.precio}
                                                stock={item.stock}
                                                descripcion={item.descripcion}
                                                imagen={item.imagen}> </ItemDetails>)
                                                
                        }else{ <p>Cargando</p>}
                   
                    

   

    return(
            <>
        
        <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={product.imagen} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.nombre}</h5>
                        <p className="card-text">{product.descripcion}</p>
                        <p className="card-text">{product.precio}</p>
                        <p className="card-text"><small className="text-muted">Stock disponible: {product.stock}</small></p>
                    </div>
                    </div>
                </div>
                </div>
                 
</>
    )
}

export default ItemDetails