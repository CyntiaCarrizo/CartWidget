const Item6 = ({nombre, precio, stock, descripcion, imagen})=>{
    return(
        <div className="card border-success mb-3" >
            <img src={imagen} class="card-img-top" alt="..."></img>
            <div className="card-header bg-transparent border-success">{nombre}</div>
            <div className="card-body text-success">
            <h5 className="card-title">${precio}</h5>
            <p className="card-text">{descripcion}</p>
            </div>
            <div className="card-footer bg-transparent border-success">Stock Disponible: {stock}</div>
        </div>
      
    )
}

export default Item6