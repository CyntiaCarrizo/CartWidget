import ItemCount from "./ItemCount"

const Item6 = ({nombre, precio, stock, descripcion, imagen})=>{
    return(
        <div className="card border-success mb-3" >
            <img src={imagen} class="card-img-top" alt="..."></img>
            <div className="card-header bg-transparent border-success">{nombre}</div>
            <div className="card-body text-success">
            <p className="card-title">${precio}</p>
            <p className="Detalles">{descripcion}</p>
            </div>
            <div className="card-footer bg-transparent border-success">Stock Disponible: {stock}</div>
            {
                    <ItemCount initial={1} stock={5} ></ItemCount>
            }
        </div>
      
    )
}

export default Item6