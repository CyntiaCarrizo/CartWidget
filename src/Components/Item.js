import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"




const Item = ({id, nombre, precio, stock, imagen})=>{

  const onAdd=(cantidad)=>{
    alert(`La cantidad de productos seleccionado es: ${cantidad}`)
}
    return(
    
       <div className="row row-cols-1 row-cols-md-2 g-4">
         <div className="col">
          <div className="Ventas">
            <div className="card ventas">
            <div className="card-body polaroid"> 
              <img src={imagen} class="card-img-top" alt="..."/>
                 <h5 className="card-title">{nombre}</h5>               
                    
               <Link to={`/item/${id}`}> <button className="comprar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ticket-detailed" viewBox="0 0 16 16">
                      <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z"/>
                      <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5ZM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5h-13Z"/>
                      </svg> Detalles del producto</button></Link>
                  
                     
                      
                      <p className="Detalles">Stock disponible:{stock}</p>
                      
                      <p className="Detalles">Precio: $ {precio}</p>
                      {
                        <ItemCount  onAdd={onAdd}></ItemCount>
                      }
            </div>
            </div>
            </div>
        </div>

  </div>
  
      
    )
}

export default Item