
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import ItemList from './Components/ItemList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
       <ItemListContainer greeting ="Milano es una tienda especializada en vinos, espumantes, whiskys, bebidas blancas, cervezas y regaleria."></ItemListContainer>
      </header>
      <ItemList product={datos}></ItemList>
      <ItemCount stock={5} initial={1}></ItemCount>
    </div>
  );
}

export default App;



