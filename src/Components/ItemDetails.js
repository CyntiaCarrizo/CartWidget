


const ItemDetails =({product})=>{

   console.log("ItemDetails", product)
                    
    return(
            <>
            {
        product.length > 0 ? (
        <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={product[0].imagen} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product[0].nombre}</h5>
                        <p className="card-text">{product[0].descripcion}</p>
                        <p className="card-text">{product[0].precio}</p>
                        <p className="card-text"><small className="text-muted">Stock disponible: {product[0].stock}</small></p>
                    </div>
                    </div>
                </div>
                </div>): <p>Cargando</p>
            }                 
                </>
    )
}

export default ItemDetails