



const Item = ({nombre, precio, stock, descripcion, imagen})=>{
    return(
        <>
       <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
            <div className="card">
            <img src={imagen} class="card-img-top" alt="..."/>
            <div className="card-body">
                 <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Precio:{precio}</p>
                    <p className="card-text">Descripcion:{descripcion}</p>
                    <p className="card-text">stock:{stock}</p>
            </div>
            </div>
        </div>
  <div className="col">
    <div className="card">
      <img src={imagen} class="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Precio:{precio}</p>
        <p className="card-text">Descripcion:{descripcion}</p>
        <p className="card-text">stock:{stock}</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={imagen} class="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Precio:{precio}</p>
        <p className="card-text">Descripcion:{descripcion}</p>
        <p className="card-text">stock:{stock}</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={imagen} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Precio:{precio}</p>
        <p className="card-text">Descripcion:{descripcion}</p>
        <p className="card-text">stock:{stock}</p>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Item