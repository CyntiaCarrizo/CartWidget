
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import './CssPersonal/CssPersonalizado.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailsContainer from './Components/ItemDetailsContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar></Navbar>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting ="Milano es una tienda especializada en vinos, espumantes, whiskys, bebidas blancas, cervezas y regaleria."></ItemListContainer>}></Route>
                <Route path='/category/:idCategory' element={<ItemListContainer></ItemListContainer>}></Route>
                <Route path='/item/:idItem' element={<ItemDetailsContainer></ItemDetailsContainer>}></Route>
             </Routes>
      </BrowserRouter>
      
      </header>
     
     
    </div>
  );
}

export default App;



