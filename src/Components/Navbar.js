import { Link } from "react-router-dom"
import Cardwidget from "./Cartwidget"



function Navbar(){
    return(
   <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <img src="./logoo.jpg" width="75" height="75"></img>
   <Link to='/'> <h1 className="titulo"><a className="navbar-brand" href="#">Milano Beers & Cheers</a></h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
        <Link to='/category/1'> <a className="nav-link" href="#">Cervezas</a></Link>
        </li>
        <li className="nav-item">
         <Link to='/category/2'><a className="nav-link" href="#">Vinos</a></Link> 
        </li>
        <li className="nav-item">
          <Link to='/category/5'><a className="nav-link" href="#">Energizantes</a></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Compras Mayoristas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Buscar</a>
        </li>
        <li className="nav-item" >
         <Cardwidget width="80"></Cardwidget>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
   </>       
        
     
     
    )
}

export default Navbar